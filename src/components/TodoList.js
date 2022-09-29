import { useState, useEffect } from "react";
import { useAuth } from "./Context";
import "../stylesheets/_todolist.scss";
import { Link, useNavigate } from "react-router-dom";
import AddBtn from "./AddBtn";
import { logOut } from "../services/callAPI";
import { getTodo } from "../services/callAPI";

function TodoList() {
  let navigate = useNavigate();
  // const { user, token } = useAuth();
  const { user, setUser, token, setToken } = useAuth();
  const [todoState, setTodoState] = useState("all");
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const [stateList] = useState([
    {
      todoState: "all",
      content: "all",
    },
    {
      todoState: "active",
      content: "Active",
    },
    {
      todoState: "completed",
      content: "Completed",
    },
  ]);

  //取得 todo
  const getTodoList = async (e) => {
    await getTodo(token)
      .then((response) => {
        console.log(response);
        setData(response.data?.todos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTodoList();
  }, []);

  //登出
  const logout = async (e) => {
    e.preventDefault();
    await logOut(token)
      .then((response) => {
        console.log(response);
        setToken("");
        setUser("");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //tab 切換
  const changeState = (e, item) => {
    e.preventDefault();
    setTodoState(item.todoState);
    console.log(item);
  };

  //篩選 todo
  const filterTodo = () => {
    if (todoState === "completed")
      return data.filter((item) => item.completed_at);
    else if (todoState === "active")
      return data.filter((item) => !item.completed_at);
    else return data;
  };

  // fetch 寫法
  // const logout = () => {
  //   const _url = "https://todoo.5xcamp.us/users/sign_out";
  //   fetch(_url, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: token,
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       navigate("/signup");
  //     })

  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <div className="d-flex justify-content-between align-items-end text-white">
        <h1 className="fw-bold fs-1">TODO</h1>
        <div>
          <a
            href="#"
            className="mb-2 d-flex justify-content-end"
            onClick={logout}
          >
            登出
          </a>
          <p>
            <span>{user}</span>'s Todo List
          </p>
        </div>
      </div>
      <AddBtn text={text} setText={setText} getTodoList={getTodoList} />
      <div className="bg-white rounded shadow ">
        <div>
          <ul className="d-flex justify-content-between pt-2 mb-2 list-tab">
            {stateList.map((item, i) => {
              return (
                <li key={i} className="w-100 ">
                  <a
                    href="/"
                    className={todoState === item.todoState ? "active" : ""}
                    onClick={(e) => changeState(e, item)}
                  >
                    {item.content}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul>
          {data.map((item, i) => {
            return (
              <li
                key={i}
                className="border-1 border-bottom p-4 d-flex justify-content-between"
              >
                <div className="d-flex align-items-start">
                  <label htmlFor="add-btn"></label>
                  <input type="checkbox" name="add-btn" className="me-3" />
                  <span>{item.content}</span>
                </div>
                <a href="#">
                  <i className="bi bi-trash text-muted"></i>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="p-4 d-flex justify-content-between align-items-end list-footer fs-7 text-muted">
          <span>
            <span>{data.filter((item) => !item.completed_at).length} </span>
            items left
          </span>
          <Link to="/">
            <span>Clear Completed</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TodoList;

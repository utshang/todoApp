import { useState } from "react";
import { useAuth } from "./Context";
import "../stylesheets/_todolist.scss";
import { Link, useNavigate } from "react-router-dom";
import AddBtn from "./AddBtn";
import { logOut } from "../services/callAPI";

function TodoList() {
  let navigate = useNavigate();
  // const { user, token } = useAuth();
  const { user, setUser, token, setToken } = useAuth();

  const [todoState, setTodoState] = useState("all");
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

  const changeState = (e, item) => {
    e.preventDefault();
    setTodoState(item.todoState);
    console.log(item);
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
            href="/"
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
      <AddBtn />
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
          <li className="border-1 border-bottom p-4 d-flex justify-content-between">
            <div className="d-flex align-items-start">
              <label htmlFor="add-btn"></label>
              <input type="checkbox" name="add-btn" className="me-3" />
              <span>煮飯</span>
            </div>
            <Link to="/">
              <i className="bi bi-trash text-muted"></i>
            </Link>
          </li>
        </ul>
        <div className="p-4 d-flex justify-content-between align-items-end list-footer fs-7 text-muted">
          <span>
            <span>5</span> items left
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

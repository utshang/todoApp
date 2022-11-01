import "../stylesheets/_todolist.scss";
import { useState, useEffect } from "react";
import { useAuth } from "./Context";
import { useNavigate } from "react-router-dom";
import AddBtn from "./AddBtn";
import { logOut } from "../services/callAPI";
import { getTodo } from "../services/callAPI";
import { deleteTodo } from "../services/callAPI";
import { toggleTodo } from "../services/callAPI";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function TodoList() {
  let navigate = useNavigate();
  // const { user, token } = useAuth();
  const { user, setUser, token, setToken } = useAuth();
  const [todoState, setTodoState] = useState("all");
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const MySwal = withReactContent(Swal);

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
    // eslint-disable-next-line
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
        MySwal.fire({
          icon: "error",
          title: <p>Logout Failed!</p>,
          text: "Please navigate to login page",
        });
        navigate("/");
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

  // useEffect(() => {
  //   filterTodo();
  // }, [data]);

  //刪除 todo
  const delTodo = async (e, id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire("Deleted!", "Your todo has been deleted.", "success");
        deleteTodo(id, token)
          .then((response) => {
            console.log(response);
            getTodoList();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  //刪除 全部 completed 的 todo
  const delCompleted = (e) => {
    const completedTodos = data.filter((item) => {
      return item.completed_at;
    });
    completedTodos.forEach((item) => {
      delTodo(e, item.id);
    });
  };

  //toggle todo
  const toggleItem = async (id) => {
    await toggleTodo(id, token)
      .then((response) => {
        console.log(response);
        getTodoList();
      })
      .catch((error) => {
        console.log(error);
      });
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
        <div className="d-flex flex-column align-items-end">
          <button className=" btn mb-2 p-0 text-white" onClick={logout}>
            Log out
          </button>
          <p>
            <span>{user}</span>'s Todo List
          </p>
        </div>
      </div>
      <AddBtn text={text} setText={setText} getTodoList={getTodoList} />
      {data.length > 0 ? (
        <div className="bg-white rounded shadow">
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
            {filterTodo().map((item, i) => {
              return (
                <li
                  key={i}
                  className="border-1 border-bottom p-3 d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-start">
                    <label htmlFor="add-btn"></label>
                    <input
                      type="checkbox"
                      name="add-btn"
                      className="me-3"
                      checked={item.completed_at ? "checked" : ""}
                      onChange={() => {
                        toggleItem(item.id);
                      }}
                    />
                    <span className={item.completed_at ? "completed" : ""}>
                      {item.content}
                    </span>
                  </div>
                  <button className="btn">
                    <i
                      className="bi bi-trash"
                      onClick={(e) => delTodo(e, item.id)}
                    ></i>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="p-3 d-flex justify-content-between align-items-center list-footer fs-7">
            <span className="items-left">
              <span>{data.filter((item) => !item.completed_at).length} </span>
              items left
            </span>

            <button className="btn" onClick={(e) => delCompleted(e)}>
              Clear Completed
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded shadow p-4">
          <p className="text-black text-center">There is no todo at all !</p>
        </div>
      )}
    </>
  );
}

export default TodoList;

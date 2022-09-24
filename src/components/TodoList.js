import "../SCSS/_todolist.scss";
import { Link } from "react-router-dom";
import AddBtn from "./AddBtn";

function TodoList() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-end text-white ">
        <h1 className="fw-bold fs-1">TODO</h1>
        <div>
          <Link
            to="/login"
            className="logout-btn text-white d-flex justify-content-end mb-2"
          >
            Log out
          </Link>
          <p>
            <span>Ashley</span>'s Todo List
          </p>
        </div>
      </div>
      <AddBtn />
      <div className="bg-white rounded shadow">
        <ul>
          <li className="border-1 border-bottom p-4 d-flex justify-content-between">
            <div className="d-flex align-items-start">
              <label htmlFor="add-btn"></label>
              <input type="checkbox" name="add-btn" className="me-3" />
              <span>煮飯</span>
            </div>
            <Link to="/">
              <i class="bi bi-x-lg"></i>
            </Link>
          </li>
        </ul>
        <div className="p-4 d-flex justify-content-between align-items-end list-footer">
          <span className="fs-7 text-muted">
            <span>5</span> items left
          </span>
          <div>
            <Link to="/">
              <span>All</span>
            </Link>
            <Link to="/" className="mx-1 mx-md-3">
              <span>Active</span>
            </Link>
            <Link to="/">
              <span>Completed</span>
            </Link>
          </div>
          <Link to="/">
            <span>Clear Completed</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TodoList;

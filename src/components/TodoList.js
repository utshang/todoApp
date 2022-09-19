import "../SCSS/_todolist.scss";
import { Link } from "react-router-dom";

function Test() {
  return (
    <>
      <body className="bg-img">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end text-white ">
            <h1 className="fw-bold fs-1 ">TODO</h1>
            <div className="">
              <Link
                to="/"
                className="logout-btn text-white d-flex justify-content-end mb-2"
              >
                Log out
              </Link>
              <p>
                <span>Ashley</span>'s Todo List
              </p>
            </div>
          </div>

          <form className="bg-white d-flex justify-content-between my-4 rounded shadow">
            <input
              type="text"
              className="border-0 p-3 w-100 no-outline rounded"
            />
            <button className="btn">
              <i class="bi bi-plus fs-3 text-blue"></i>
            </button>
          </form>
          <div className="bg-white rounded shadow">
            <ul>
              <li className="mb-2 border-1 border-bottom p-4 d-flex justify-content-between">
                fsdds
                <Link to="/">
                  <i class="bi bi-x-lg"></i>
                </Link>
              </li>
              <li className="mb-2 border-1 border-bottom p-4 d-flex justify-content-between">
                fsdds
                <Link to="/">
                  <i class="bi bi-x-lg"></i>
                </Link>
              </li>
              <li className="mb-2 border-1 border-bottom p-4 d-flex justify-content-between">
                fsdds
                <Link to="/">
                  <i class="bi bi-x-lg"></i>
                </Link>
              </li>
              <li className="mb-2 border-1 border-bottom p-4 d-flex justify-content-between">
                fsdd
                <Link to="/">
                  <i class="bi bi-x-lg"></i>
                </Link>
              </li>
              <li className="mb-2 border-1 border-bottom p-4 d-flex justify-content-between">
                fsdd
                <Link to="/">
                  <i class="bi bi-x-lg"></i>
                </Link>
              </li>
            </ul>
            <div className="p-4 d-flex justify-content-between align-items-end list-footer">
              <span>
                <span>5</span> items left
              </span>
              <div>
                <Link to="/">
                  <span> All</span>
                </Link>
                <Link to="/" className="mx-1 mx-md-3">
                  <span> Active</span>
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
          <p className="footer mt-3 text-center">
            Challenge by
            <a href="https://www.frontendmentor.io/home">
              <span> Frontend Menotr</span>
            </a>
            . Coded by
            <a href="https://github.com/utshang?tab=repositories">
              <span> Ashley Shang</span>
            </a>
            .
          </p>
        </div>
      </body>
    </>
  );
}

export default Test;

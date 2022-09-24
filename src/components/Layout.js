import "../SCSS/_layout.scss";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="bg-img">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end text-white ">
            <h1 className="fw-bold fs-1">TODO</h1>
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
          <Outlet />
          <p className="footer mt-3 text-center">
            Challenge by
            <a href="https://www.frontendmentor.io/home">
              <span> Frontend Mentor</span>
            </a>
            . Coded by
            <a href="https://github.com/utshang?tab=repositories">
              <span> Ashley Shang</span>
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Layout;

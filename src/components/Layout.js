import "../stylesheets/_layout.scss";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="bg-img">
        <div className="container">
          <Outlet />
          <p className="text-muted py-5 text-center fs-7">
            Challenge by
            <a href="https://www.frontendmentor.io/home">
              <span className="text-purple"> Frontend Mentor</span>
            </a>
            . Coded by
            <a href="https://github.com/utshang?tab=repositories">
              <span className="text-purple"> Ashley Shang</span>
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Layout;

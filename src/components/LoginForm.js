import "../stylesheets/_loginsignup.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <h1 className="fw-bold fs-1 text-white">LogIn</h1>
      <div className="bg-white rounded shadow">
        <div className="p-5 mt-4">
          <span>Email</span>
          <label htmlFor="email"></label>
          <input
            type="text"
            className="p-3 w-100 no-outline rounded border border-1 border-muted mt-2 mb-4"
          />
          <span>Password</span>
          <label htmlFor="password"></label>
          <input
            type="text"
            className="p-3 w-100 no-outline rounded border border-1 border-muted mt-2"
          />
          <button className="btn login-btn w-100 mt-4 fw-bold">Log in</button>
          <Link
            to="/signup"
            className="text-purple text-center mt-3 d-flex justify-content-center"
          >
            New here? Join us!
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;

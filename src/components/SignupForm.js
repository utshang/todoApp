import "../SCSS/_loginform.scss";

function Signup() {
  return (
    <>
      <h1 className="fw-bold fs-1 text-white">SignUp</h1>
      <div className="bg-white rounded shadow">
        <div className="p-5 mt-4">
          <span>Email</span>
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            className="p-3 w-100 no-outline rounded border border-1 border-muted mt-2 mb-4"
          />
          <span>Nickname</span>
          <label htmlFor="Nickname"></label>
          <input
            type="text"
            name="Nickname"
            className="p-3 w-100 no-outline rounded border border-1 border-muted mt-2 mb-4"
          />
          <span>Password</span>
          <label htmlFor="password"></label>
          <input
            type="text"
            name="password"
            className="p-3 w-100 no-outline rounded border border-1 border-muted mt-2"
          />
          <button className="btn login-btn w-100 mt-4 fw-bold">
            Join Todo App
          </button>
        </div>
      </div>
    </>
  );
}

export default Signup;

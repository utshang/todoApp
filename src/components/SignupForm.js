import "../stylesheets/_loginsignup.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signUp } from "../services/callAPI";

function Signup() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (user) => {
    let data = { user };
    await signUp(data)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <>
      <h1 className="fw-bold fs-1 text-white">SignUp</h1>
      <div className="bg-white rounded shadow">
        <form className="p-5 mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="p-3 w-100 no-outline rounded border border-1 border-muted my-2"
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            <span className="fs-7 text-purple">{errors.email?.message}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="name">Nickname</label>
            <input
              type="text"
              className="p-3 w-100 no-outline rounded border border-1 border-muted my-2"
              {...register("nickname", {
                required: { value: true, message: "Nickname is required" },
              })}
            />
            <span className="fs-7 text-purple">{errors.nickname?.message}</span>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="p-3 w-100 no-outline rounded border border-1 border-muted my-2"
              {...register("password", {
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 6,
                  message: "Password must 6 or more characters",
                },
              })}
            />
            <span className="fs-7 text-purple">{errors.password?.message}</span>
          </div>
          <button className="btn login-btn w-100 mt-4 fw-bold">
            Join Todo App
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;

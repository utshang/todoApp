import "../stylesheets/_loginsignup.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "./Context";
import { signIn } from "../services/callAPI";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Login() {
  let navigate = useNavigate();
  const { setToken, setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (user) => {
    let data = { user };
    await signIn(data)
      .then((response) => {
        console.log(response);
        setToken(response.headers.authorization);
        setUser(response.data.nickname);
        navigate("/todolist");
      })
      .catch((error) => {
        console.log(error.response);
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          icon: "error",
          title: <p>電子信箱或密碼錯誤</p>,
        });
      });
  };

  return (
    <>
      <h1 className="fw-bold fs-1 text-white">LogIn</h1>
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
          <button className="btn login-btn w-100 mt-4 fw-bold" type="submit">
            Log in
          </button>
          <Link
            to="/signup"
            className="text-purple text-center mt-3 d-flex justify-content-center fs-7"
          >
            New here? Join us!
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;

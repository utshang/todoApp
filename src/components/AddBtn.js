import "../stylesheets/_addbtn.scss";
import { useAuth } from "./Context";
import { addTodo } from "../services/callAPI";

function AddBtn({ text, setText, getTodoList }) {
  const { token } = useAuth();

  //當input有值時，plus變顏色且可點擊
  function changeColor(e) {
    const plus = document.querySelector(".bi-plus");
    if (e.target.value) {
      plus.classList.remove("cursor-notallowed");
      plus.classList.add("plus-active");
      console.log(e.target.value);
    } else {
      plus.classList.add("cursor-notallowed");
      plus.classList.remove("plus-active");
    }
  }

  //新增todo
  const add = async (e) => {
    e.preventDefault();
    if (text === "") {
    } else {
      setText("");
      let item = { todo: { content: text } };
      await addTodo(item, token)
        .then((response) => {
          console.log(response);
          getTodoList();
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };

  return (
    <form className="bg-white d-flex justify-content-between my-4 rounded shadow">
      <input
        type="text"
        placeholder="Create a new todo..."
        className="border-0 p-4 w-100 no-outline rounded"
        onChange={(e) => {
          changeColor(e);
          setText(e.target.value);
        }}
      />
      <a
        href="#"
        className="btn border border-0 d-flex align-items-center"
        onClick={(e) => add(e)}
      >
        <i className="bi bi-plus fs-3 cursor-notallowed"></i>
      </a>
    </form>
  );
}

export default AddBtn;

import "../stylesheets/_addbtn.scss";

function AddBtn() {
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

  return (
    <form className="bg-white d-flex justify-content-between my-4 rounded shadow">
      <input
        type="text"
        placeholder="Create a new todo..."
        className="border-0 p-4 w-100 no-outline rounded"
        onChange={(e) => {
          changeColor(e);
        }}
      />
      <a href="#" className="btn border border-0 d-flex align-items-center">
        <i className="bi bi-plus fs-3 cursor-notallowed"></i>
      </a>
    </form>
  );
}

export default AddBtn;

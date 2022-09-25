function AddBtn() {
  return (
    <form className="bg-white d-flex justify-content-between my-4 rounded shadow">
      <input
        type="text"
        placeholder="Create a new todo..."
        className="border-0 p-4 w-100 no-outline rounded"
      />
      <button className="btn">
        <i className="bi bi-plus fs-3 text-blue"></i>
      </button>
    </form>
  );
}

export default AddBtn;

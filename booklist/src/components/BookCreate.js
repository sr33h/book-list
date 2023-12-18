import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  function handeChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title : </label>
        <input value={title} onChange={handeChange}></input>

        <button>Create</button>
      </form>
    </div>
  );
}

export default BookCreate;

import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  function handeChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(title) {
      onCreate(title);
      setTitle("");
    }
    
  }

  return (
    <div>
      <form style = {{position:'relative'}} onSubmit={handleSubmit}>
        <label className="title">Enter a text... </label>
        <input className="input" value={title} onChange={handeChange}></input>

        <button style = {{position:'absolute',
                          right: '0px',
                          borderTopLeftRadius:0,
                          borderBottomLeftRadius:0                    }} className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;

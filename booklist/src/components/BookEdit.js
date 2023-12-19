import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <>
      <form style={{
        backgroundColor:'#fff'
      }} onSubmit={handleSubmit}>
        
        <input style={{
          border:0,
          background:'transparent',
          fontSize:'15px'
          
        }} value={title} onChange={handleChange}></input>
        <button>Save</button>
      </form>
    </>
  );
}

export default BookEdit;

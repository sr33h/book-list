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
    <>
      <form style = {{width:'50vw'}} onSubmit={handleSubmit}>
        <div style={{display:'flex'}}>
        <input 
        className="input" 
        value={title} 
        onChange={handeChange}
        placeholder="Enter a title and press Enter/Create"
        style={{
                borderTopRightRadius:0,
                borderBottomRightRadius:0 }}></input>

        <button style = {{borderTopLeftRadius:0,
                          borderBottomLeftRadius:0,
                          fontFamily:'cursive',
                          backgroundColor:'#56dddd',
                          border:'none'
                             }} 
                          className="button">Create</button>
          
        </div>
        
      </form>
    </>
  );
}

export default BookCreate;

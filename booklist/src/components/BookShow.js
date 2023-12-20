import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [editMode, setEditMode] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = (id, newtitle) => {
    setEditMode(false);
    onEdit(id, newtitle);
  };

  let content = <h2 style={{fontWeight:'bold', width:'200px',overflow:'clip'}}>{book.id}. {book.title}</h2>;
  if (editMode) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div style={{
      margin:'5px',
      padding:'10px',
      boxShadow:'0 0 5px rgba(0,0,0,0.5)',
      borderRadius:'5px',
      backgroundColor:'#eeeeee',
      color:'#123456',
      fontSize:'15px',
      
    }}>
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/200`}></img>
      {content}
      <button 
      className="button" 
      onClick={handleEditClick} 
      style={{
        backgroundColor:'#5699dd',
        margin:'8px 8px 0 0'}} >Edit</button>
      <button 
      className="button" 
      onClick={handleDeleteClick} 
      style={{
        backgroundColor:'#de6778',
        margin:'8px 0 0 0'}} >Delete</button>
    </div>
  );
}

export default BookShow;

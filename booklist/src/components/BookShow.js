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

  let content = <h3>{book.title}</h3>;
  if (editMode) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div>
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/200`}></img>
      {content}
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default BookShow;

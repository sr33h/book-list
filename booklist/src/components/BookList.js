import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return <div style={{
    display:'flex',
    flexWrap:'wrap'
  }}>
    
    {renderedBooks}</div>;
}

export default BookList;

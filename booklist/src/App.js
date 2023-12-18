import { useState } from "react";
import React from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
let nextid = 0;
function App() {
  const [books, setBooks] = useState([]);

  const editBook = (id, newtitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newtitle };
      } else {
        return book;
      }
    });

    setBooks(updatedBooks);
  };

  function createBook(title) {
    const updatedBooks = [...books, { id: nextid++, title }];
    setBooks(updatedBooks);
    console.log(nextid);
  }

  function deleteBook(id) {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  }

  return (
    <div style={{}}>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
    </div>
  );
}

export default App;

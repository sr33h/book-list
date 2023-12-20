import { useState } from "react";
import React from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import 'bulma/css/bulma.css'
let nextid = 1;
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

  return (<>
    <div style={{
      position:"fixed",
      bottom:'0',
      left:'0',
      height:'40vh',
      width:'100%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#99ab77',
      margin:'0',
      zIndex:'1000'
    }}>
      <BookCreate onCreate={createBook} />
      </div>
      
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />

      <div style={{height:'40vh',
      width:'100%'}}></div>
     
      
      </>
  );
}

export default App;

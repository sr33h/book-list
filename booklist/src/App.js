import { useState } from "react";
import React from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import 'bulma/css/bulma.css'
import axios from 'axios'
import { useEffect } from "react";

let nextid = 1;
function App() {
  const [books, setBooks] = useState([]);  

const fetchBooks = async () => {
  const response = await axios.get('http://localhost:3001/books');
  setBooks(response.data);
}

useEffect( () => {
  fetchBooks();
}, []);

  const editBook = async (id, newtitle) => {

    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newtitle
    })
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      } else {
        return book;
      }
    });

    setBooks(updatedBooks);
  };

  async function createBook(title) {

  const response = await axios.post('http://localhost:3001/books', {
    title
  });

  
   const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
    console.log(nextid);
  }

  async function deleteBook(id) {

    await axios.delete(`http://localhost:3001/books/${id}`);
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

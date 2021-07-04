import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Card, Form, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookTable from '../component/BookTable';
import Header from "../component/Header";
import AddBook from '../component/AddBook';
import data from '../db.json';

function App(props){
  const [ booksState, setBooks ] = useState([
    { "id": 1, "book_title": "my json-server", "author_name": "typicode","category":"fantasy", "isbn": 2008955455},
    { "id": 2, "book_title": "all json-server2", "author_name": "revers","category":"horror", "isbn": 20082335488},
    { "id": 3, "book_title": "json-server3", "author_name": "Mark","category":"fantasy", "isbn": 2008955499},
    { "id": 4, "book_title": "json-server4", "author_name": "anderson","category":"horror", "isbn": 2008955400},
    { "id": 5, "book_title": "json-server5", "author_name": "and55erson","category":"horror", "isbn": 2098255400}
  ]);
  const [ toDoList, setToDoList ] = useState(data);
  
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }


  const onDelete = (id) => {
    let filtered = booksState.filter(books => {
      return books.id !== id;
    });
    setBooks(filtered);
  }
  

  const addBook = (userInputTitle, userInputAutor, userInputCategory, userInputIsbn) => {
    let copybook = [...booksState];
    copybook = [...copybook, { id: booksState.length + 1, book_title: userInputTitle, author_name: userInputAutor, category: userInputCategory, isbn: userInputIsbn }];
    console.log("add book", copybook)
    setBooks(copybook);
  }

  return (
  <>
    <div className = "App" >
    {/* <Header /> */}
    {/* <AddBook addBook={addBook}/> */}
    <div>
    <BookTable books={booksState} onDelete={onDelete} />
    {/* <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/> */}
    
   </div>
    </div>
  </>)
}



export default App;

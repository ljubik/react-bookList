import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function BookTable({books, onDelete}){
  const [ booksState, setBooks ] = useState()
const [ isEdit, setIsEdit ] = useState({isEdit :false});



  // const onDelete = (id) => {

  //   const filteredBooks = books.filter(book => {
  //     return book.id !== id;
  //   });
  //   console.log("ondel filteredBooks", filteredBooks)
  //   setBooks({filteredBooks})
  // }

  const onEdit = (id) => {
    console.log("onEdit", isEdit)
    setIsEdit({isEdit:true});
  }

    return (
        <>
          
          <div className = "App" >
        
          <Table striped bordered hover books={books}>
            <thead>
              <tr>
                <th>#</th>
                <th>Title book</th>
                <th>Author name</th>
                <th>ISBN</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((post) => 
              <tr key={post.id}>
              <td key={post.id}>
                {post.id}
              </td>
              <td>
                {post.book_title}
              </td>
              <td>
                {post.author_name}
              </td>
              <td>
                {post.isbn}
              </td>
              <td>
                {post.category}
              </td>
              <td>
                <span><Button variant="danger" size="sm" onClick={onDelete}> Delete </Button> </span>
                <span><Button variant="warning" size="sm" onClick={onEdit}> Edit</Button> </span>
               </td>
              </tr>
              )}
            </tbody>
          </Table>
      
        </div>
      
        </>)
}
export default BookTable;
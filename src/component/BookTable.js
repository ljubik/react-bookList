import React, { useState, useEffect} from 'react';
import { Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function BookTable({books}){
  
  const [ booksState, setBooks ] = useState([])
  const [ isEdit, setIsEdit ] = useState({isEdit :false});

useEffect(() => {
  const books = getData()
//   // GET request using axios inside useEffect React hook
//   axios.get('http://localhost:4000/books')
//       .then(response => response.data)
//       .then(data => setBooks(data.total))
      
      // console.log("use efect GET after", booksState)
  }, []);

function getData() {
    axios.defaults.baseURL = `http://localhost:4000`
    axios
    .get('/books')
    .then(({ data }) => {
      console.log('+++++++', data)
      localStorage.setItem('books', JSON.stringify(data));
      console.log('+++++++', data)
      return setBooks({ booksState: [...data] });
      // return setBooks(() => ({ book: [...data] }));
      })
    .catch((error) => {
      console.log('---------', error)
    })

   
  }

  
  const onDelete = (id) => {

    const filteredBooks = books.filter(book => {
      return book.id !== id;
    });
    console.log("ondel filteredBooks", filteredBooks)
    setBooks({filteredBooks})
  }

  const onEdit = (id) => {
    console.log("onEdit", isEdit)
    setIsEdit({isEdit:true});
  }

    return (
        <>

          <div className = "App" >
        
          <Table striped bordered hover books={booksState}>
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
              {/* {books.map((post) => 
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
              )} */}
            </tbody>
          </Table>
      
        </div>
      
        </>)
}
export default BookTable;
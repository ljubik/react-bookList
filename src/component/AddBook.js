import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Table} from 'react-bootstrap';


function AddBook({addBook, userInputTitle, userInputAutor, userInputCategory, userInputIsbn}){
    const [ userInput, setUserInput ] = useState('');


    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(userInputTitle, userInputAutor, userInputCategory, userInputIsbn);
         userInputTitle = ("");
         userInputAutor = ("");
         userInputCategory = ("");
         userInputIsbn = ("");
    }

    return(
        <Form onSubmit={handleSubmit}>
            <div>            
            <span> Add a book </span>
            <br />
            <input placeholder="Book Name" value={userInputTitle} type="text" onChange={handleChange} required/>
      
            <input placeholder="Book author" value={userInputAutor} type="text" onChange={handleChange} required/>
            
            <input placeholder="Book isbn" value={userInputCategory} type="text" onChange={handleChange} required/>

            <input placeholder="Book category" value={userInputIsbn} type="text" onChange={handleChange} required/>
            <br></br>
            <Button variant="primary" size="sm" onClick={handleSubmit}>Add Book</Button>
            <hr/>
            </div>
        </Form>
    )

}
export default AddBook
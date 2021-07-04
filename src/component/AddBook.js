import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Table} from 'react-bootstrap';


function AddBook({addBook}){
    const [ userInput, setUserInput ] = useState('');
    const [ formInput, setFormInput ] = useState([]);
    
    console.log("start add blok", formInput)

    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(userInputTitle, userInputAutor, userInputCategory, userInputIsbn);

        formInput = {userInputTitle, userInputAutor, userInputCategory, userInputIsbn} 
        
         console.log(userInputTitle, userInputAutor, userInputCategory, userInputIsbn)
         formInput.userInputTitle = ("");
         formInput.userInputAutor = ("");
         formInput.userInputCategory = ("");
         formInput.userInputIsbn = ("");
    }

    return(
        <Form onSubmit={handleSubmit}>
            <div>            
            <span> Add a book </span>
            <br />
            <input placeholder="Book Name" value={formInput.userInputTitle} type="text" onChange={handleChange} required/>
      
            <input placeholder="Book author" value={formInput.userInputAutor} type="text" onChange={handleChange} required/>
            
            <input placeholder="Book isbn" value={formInput.userInputCategory} type="text" onChange={handleChange} required/>

            <input placeholder="Book category" value={formInput.userInputIsbn} type="text" onChange={handleChange} required/>
            <br></br>
            <Button variant="primary" size="sm" onClick={handleSubmit}>Add Book</Button>
            <hr/>
            </div>
        </Form>
    )

}
export default AddBook
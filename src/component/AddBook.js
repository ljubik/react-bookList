import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Table} from 'react-bootstrap';
import axios from 'axios';

function AddBook({addBook}){
    const [ userInput, setUserInput ] = useState('');
    
    const [ formInput, setFormInput ] = useState();

    const [ booksState, setBooks ] = useState()
    
    // const name = target.name;


    function useInput({ type /*...*/ }) {
        const [value, setValue] = useState("");
        const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];


    // const [username, userInput] = useInput({ type: "text" });
    // const [password, passwordInput] = useInput({ type: "text" });
   
    // return <>
    //   {userInput} -> {username} <br />
    //   {passwordInput} -> {password}
    // </>;
    }



    // console.log("start add blok", formInput)

    // useEffect(() => {
      
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(formInput)
    //     };
    //     fetch('http://localhost:4000/books', requestOptions)
    //         .then(response => response.json())
    //         .then(data => setBooks(...booksState, formInput ));
    // }, []);
    
    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    // const handleChange = (event) => {
    //     userInputTitle({book_title: event.target.value});
    //     userInputAutor({author_name: event.target.value});
    //     userInputCategory({category: event.target.value});
    //     userInputIsbn({isbn: event.target.value});
    //   }

    const handleSubmit = (e) => {
        e.preventDefault();
        // addBook(userInputTitle, userInputAutor, userInputCategory, userInputIsbn);
        addBook(formInput)
        // formInput = {userInputTitle, userInputAutor, userInputCategory, userInputIsbn} 
        console.log("start submit", formInput)
        setFormInput(...formInput, formInput)
        //  console.log(userInputTitle, userInputAutor, userInputCategory, userInputIsbn)
         userInputTitle = ("");
         userInputAutor = ("");
         userInputCategory = ("");
         userInputIsbn = ("");
    }

    return(
        <Form onSubmit={handleSubmit}>
            <div>            
            <h2>Add a book </h2>
            <br />
            <input placeholder="Book Name" value={useState.userInputTitles} name={useState.userInputTitle} type="text" onChange={handleChange} required/>
      
            <input placeholder="Book author" value={useState.userInputAutor} name={useState.userInputAutor} type="text" onChange={handleChange} required/>
            
            <input placeholder="Book isbn" value={useState.userInputCategory} name={useState.userInputCategory} type="number" onChange={handleChange} required/>

            <input placeholder="Book category" value={useState.userInputIsbn} name={useState.userInputIsbn} type="text" onChange={handleChange} required/>
            <br></br>
            <Button variant="primary" size="sm" onClick={handleSubmit}>Add Book</Button>
            <hr/>
            </div>
        </Form>
    )

}
export default AddBook
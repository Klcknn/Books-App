import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const editBookByID = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return {...book, title: newTitle};
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    const deleteBookByID = (id) => {
        const updatedBooks = books.filter( (book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks); 
    };
    
    const createBook = (title) => { 
        const updateBooks = [
            ...books , 
            { 
                id: Math.round(Math.random() * 9999), 
                title,  //  { id: 123 , title: title } the same above part 
            },
        ];
        setBooks(updateBooks);          
    }; 

    return (
        <div className="app">
            <h1>Reading List of The Books</h1>
            <BookList books={books} onDelete={deleteBookByID} onEdit={editBookByID} />  {/*  books onDelete is a props  */} 
            <BookCreate  onCreate={createBook} />
        </div>

    );

}

export default App;
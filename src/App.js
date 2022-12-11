import { useState , useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);
    
    const fetchBooks = async () => { 
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    };

    useEffect(() => { 
        fetchBooks();
    }, []);

    const editBookByID = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle,
        });

        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return {...book, ...response.data}; 
                //return {...book, title: newTitle};
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    const deleteBookByID = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter( (book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks); 
    };
    
    const createBook = async (title) => { 
        const response = await axios.post("http://localhost:3001/books" , { title });
        //console.log(response);
        const updateBooks = [...books, response.data];
        setBooks(updateBooks); 

        /* 
        const updateBooks = [
            ...books , 
            { 
                id: Math.round(Math.random() * 9999), 
                title,  //  { id: 123 , title: title } the same above part 
            },
        ];
        setBooks(updateBooks);
        */       
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
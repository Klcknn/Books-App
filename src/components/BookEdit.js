import { useState } from "react";

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
    
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => { 
        event.preventDefault();
        onSubmit(book.id, title);
        
        //onEdit(book.id , title);
        
        //console.log("New Title: " , title);
        //console.log("New Title: " , title);
    };

    return (
        <form className="book-edit" onSubmit={handleSubmit} action="">
            <label htmlFor="">Title</label>
            <input className="input" value={title} onChange={handleChange} type="text" />
            <button className="button is-primary" >Save</button>
        </form>
    );

}

export default BookEdit;
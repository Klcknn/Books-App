import { useState } from "react";
function BookCreate({onCreate}) {  // send to {onCreate} value as a props
    const [title, setTitle] = useState("");    

    const handleChange = (event) => { 
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => { 
        event.preventDefault();
        onCreate(title);
        setTitle("");
    };

    return (
        <div className="book-create">
            <h3>Add a new Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Title:</label>
                <input className="input" value={title} onChange={handleChange} type="text" />
                <button className="button">Create</button>
            </form>
        </div>
    );


}

export default BookCreate;

...
# Section 6: How to Handle Forms
## 1.Adding to Array:
Code:

    const [colors, setColors] = useState([]);   
    const AddColor = (index) => { 
        const updateColors = [
            ...colors.slice( 0, index ),
            newColor,
            ...colors.slice( index )
        ];
        setColors( updateColors ); 
    };

### AddColor ref Index of Array
Code:

    const [colors, setColors] = useState([]);  
    const AddColorAtIndex = (newColor, index) => { 
        const updateColors = [  --> (1)
            ...colors.slice( 0, index ),   --> (2)
            newColor,  --> (3)
            ...colors.slice( index )  --> (4)
        ];
        setColors( updateColors ); 
    };

**Note:** 
  - (1): Create a new array
  - (2): Take everything from start of old array to "index" 
  - (3): Add a new element
  - (4): Take everything from "index" to  end

## 2. Removing an element with a particular value
 Code:

    const [colors, setColors] = useState(["red","green","blue"]);
    const removeColor = (colorToRemove) => { 
        const updateColors = colors.filter((color) => {  --> (1)
            return color !== colorToRemove;
        }); 
        setColors(updateColors);
    }; 

**Note:** 
  - (1): "filter" method always returns a new array

**Define:** 
  - Starting Array     -->    ["red","green","blue"]
  - Index of the array -->    [ 0  , 1 , 2 ]
  - Code                      
        
        (color, index) => {
               return color !== "green"; 
        }
  - If the Code block is return truthy value? Add element to new array
  - Returned new array value --> ["red","blue"]       

### RemoveColor ref Index of Array
 Code:

    const [colors, setColors] = useState(["red","green","blue"]);
    const removeColorAtIndex = (indexToRemove) => { 
        const updateColors = colors.filter((color, index) => {  --> (1)
            return indexToRemove !== index;  --> (2)
        }); 
        setColors(updateColors);
    }; 

**Note:** 
  - (1): "filter" method always returns a new array
  - (2): Return "false" when indexToRemove === index and **Finally ;**
        *If filter function returns true then the value is added to new array
        *If filter function returns false then the value is not added to new array (removed)  

Code:
    
    const [books, setBooks] = useState([
        {id: 1 , title: "Title1"},
        {id: 2 , title: "Title2"}
    ]);
    const removeBookById = (id) => {  // -->(1) for (id) 
        const updateBooks = books.filter( (book) => {
            return book.id === id;  // -->(2)
        }); 
        setBooks(updateBooks);
    }; 


**Note:** 
  - (1): Remove books with this id
  - (2): Return true when this books id is not equal to "id" **FKT:**       **F**ilter **K**eeps **T**rue 

## 3. Modifying an element based on a property

Code:
    

    const [books, setBooks] = useState([
        {id: 1 , title: "Title1"},
        {id: 2 , title: "Title2"}
    ]);
    const updateBookById = (id, newTitle) => {  // -->( (1),(2))
        const updateBooks = books.map((book) => {
            if(book.id === id){  // -->(3)
                return {...book, title:newTitle };  // -->(4)
            }
            return book;  // -->(5)
        }); 
        setBooks(updateBooks);
    }; 


**Note:** 
  - (1): Find an object with this id
  - (2): Give it is title 
  - (3): if the book has the id we are looking for ...
  - (4): Create a new object with the updated title
  - (5): if it is not the book we are looking for return it as a value

*Note: We are using the web site **https://picsum.photos** for static random image* 

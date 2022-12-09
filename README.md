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

# Section 7: Data Persistence with API requests
We are using the JSON method into the our application 

Firstly JSON Server Setup
1.Install JSON-Server with NPM at the terminal 
`npm install json-server`
![Reference Image](/screenshot/screenpic1.jpg)

2.Create a "db.json" file. There is where data will be stored.
3.Create a command to run JSON-Server
![Reference Image](/screenshot/screenpic2.PNG)
`json-server -p 3001 --watch db.json`    
**-p 3001 :** Changes the port the server is listens to 
**--watch db.json :** Tells the server to store data in db.json file 
4.Run the command in the terminal
`npm run server` --> Start JSON-Server 
`npm run start` --> Start The React development server 

- API methods for Json-Server [e.g]  
  
![Reference Image](/screenshot/screenpic3/Slayt1.JPG)

![Reference Image](/screenshot/api_methods.JPG)

**Axios Take Notes**
**1.What it does**
In a nutshell, Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API. Great, so from that we gather it does something that we can already do and that has recently been made significantly better… So why bother?
*Here is the full feature list of Axios is stated in the project’s website https://github.com/mzabriskie/axios:*
  - Make XMLHttpRequests from the browser
  - Make http requests from node.js
  - Supports the Promise API
  - Intercept request and response
  - Transform request and response data
  - Cancel requests
  - Automatic transforms for JSON data
  - Client side support for protecting against XSR
  
![Reference Image](/screenshot/screenpic4.jpg)

**2.Installing Axios** 
We use npm packaged. In the root of your project folder open terminal, run `npm install axios` 

- useEffect take notes
1. If you wanted to log some information when your component is first rendered to the screen and never again, We should write this code block
   `
   useEffect(() => {
        console.log("Logging some information");
   }, []);
   `

2. If you wanted to log some information when your component is first rendered to the screen and whenever it re-renders, We should write this code block
   `
   useEffect(() => {
        console.log("Logging some information");
   });
   `

3. Imagine you are creating a component that has a state variable called counter1 , counter2 and counter3.You want to log info about counter at the following points in time:
- a. When the component is first rendered to the screen
- b. When the component is re-rendered, but only log info if counterOne changed
 We should write this code block
    `
   useEffect(() => {
        console.log("Logging some information");
   }, [counter1]);
   `
- c. When the component is re-rendered, but only log info if counter1,Counter2 and Counter3 changed
 We should write this code block
  `
   useEffect(() => {
        console.log("Logging some information");
   }, [counter1,counter2,counter3]);
   `
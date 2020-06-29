import React,{useState} from 'react';
import '../App.css';




/* 
function MyComponent() {
      
      const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);
      const [items, setItems] = useState([]);
    
      // Note: the empty deps array [] means
      // this useEffect will run once
      // similar to componentDidMount()
      useEffect(() => {
        fetch("https://anapioficeandfire.com/api/books")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              //console.log(result)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
      
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
            console.log(items)
          
 return(

            items.map((item)=>{

                  return (
                        <div key={item.isbn}>
                                
                                <Book name={item.name} authors={item.authors} povChar={item.povCharacters} /> 
              
                        </div>
                      )

      })
) 


      }
    } */

    function Home(){
     const url = "https://anapioficeandfire.com/api/books";

     const[books,setBooks]=useState(null);


      function bookShow(){
            fetch(url)
            .then(response=>response.json())
            .then(data=>{
                  setBooks(data)

            })
            console.log(books)

      }
      return(
            <div className="app">
                  <p>hello</p>
                  <input type="button" value="Fetch" onClick={bookShow}/>
                  <br/>
                  <div className="cover">
                  {books && books.map((book,index)=>{
                        
                        var authors = book.authors.join(', ');
                        
                        return (
                       <div className="book" key={index}>
                       <p>{book.name}</p>
                       <p>{authors}</p>
                       </div>

                    )})}

                  </div>
            </div>

                  



                 

      )
      }


    export default Home;

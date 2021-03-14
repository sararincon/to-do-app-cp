import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import './App.css'; 

function App() {
  const [todos, setTodos] = useState (["Hola"]);
  const [input, setInput] = useState ("");
  const addTodo = (event) =>{
   // console.log ( "holaaaaaa funciono");  

   event.preventDefault(); //stop the refresh 
   setTodos([...todos, input])
   setInput(""); // CLEAR UP THE INPUT 
  }

  return (
    <div className="App">
      <h1> Hello guaguolin  </h1>
        <form> 
        <input value={input} onChange={event => setInput(event.target.value)}></input>  
        <Button disabled={!input} type="submit" variant ="contained" color="primary" onClick={addTodo}>Add todo </Button>
       
       </form> 

      <ul>
        {todos.map(todo =>
          {
            return <li>{todo}</li>;
          }) 
        }
      </ul>
    </div>
  );
}

export default App;

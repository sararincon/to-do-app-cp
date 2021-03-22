import React, {useState} from "react";
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import Todo from "./Todo"
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
      <h1> Hello ! </h1>
    <form>
      <FormControl>
        <InputLabel >Add todo </InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>

      <Button disabled={!input} type="submit" variant ="contained" color="primary" onClick={addTodo}>Add </Button>
    </form>    
      <ul>
        {todos.map(todo => (
            <Todo text={todo}/>
          ))}
      </ul>
    </div>
  );
}

export default App;

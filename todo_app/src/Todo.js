import React from "react";
import {List, ListItem, ListItemText}  from "@material-ui/core"
import "./Todo.css"; 

function Todo(props) {
    return (
        <div className= "todoList">
        <List> 
            <ListItem>
              <ListItemText primary= "Todo" secondary={props.text} />
            </ListItem>
        </List>
        </div>     
             

    )
}

export default Todo





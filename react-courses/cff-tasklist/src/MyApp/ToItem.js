import React from "react";

import "./todo.css";

const ToItem = (Props) => {
    const finalStyle = {
        fontstyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return(
        <div className ="todo-item">
            <input type="checkbox"
            checked = {Props.todo.completed}
            onChange = {() => Props.handleClick(Props.todo.id)} />
            <h2 style={Props.todo.completed ? finalStyle : null}>
                Task: {Props.todo.task}
            </h2>
            <p> Time: {Props.todo.time}  </p>
            </div>  
        
    )   
}
export default ToItem
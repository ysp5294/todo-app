import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

const ToDoList = props => {

    const [todos, setTodos] = useState([]);
    
    const saveTodoHandler = enteredTodo => {
        
        const todoItem = {
            ...enteredTodo,
            
        }

        props.onAddTodo(todoItem);

        // console.log(todoItem);
        
    }
    // console.log(todos);

    return <div>
        <ToDoForm onSaveTodo={saveTodoHandler}/>
        {/* <ToDoItem todos={todos}/> */}
    </div>
    
}

export default ToDoList;
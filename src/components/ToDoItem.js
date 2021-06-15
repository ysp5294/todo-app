import { useState } from "react";
import ToDoForm from "./ToDoForm";
import './ToDoItem.css';

const ToDoItem = props => {

    // let todoItem = <p>No Todos</p>
    console.log(props);

    return <div className='todo-item'>

        <div className='todo-item__date'>
            <b>Added On: </b> {props.date.toString()}
        </div>
        <div className='todo-item__description'>
            <b> &nbsp;Heading:</b> {props.heading}
            <b> &nbsp;Description:</b> {props.description}
            <div className='todo-item__user'>
                <b> &nbsp;Assigned To:</b> {props.userAssigned}
            </div>
        </div>




    </div>
}

export default ToDoItem;
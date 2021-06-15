import { useState } from "react";
import ToDoList from "./ToDoList";
import UserJson from '../Users.json';


const ToDoForm = (props) => {

    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [userAssigned, setUserAssigned] = useState('');
    const [users, setUsers] = useState(UserJson);
    
    // const [userInput, setUserInput] = useState({
    //     heading: '',
    //     description: '',
    //     date: '',
    //     userAssigned: ''
    // });


    const handleFormData = event => {
        
        event.preventDefault();

        let item = [];
        if(heading !== null){
            item = {
                id: Math.floor(Math.random() * 1000),
                heading: heading,
                description: description,
                date: new Date(date),
                userAssigned: userAssigned
            };
        }

        setHeading("");
        setDescription("");
        setDate("");
        setUserAssigned("");
        // setUsers(UserJson);

        props.onSaveTodo(item);
        // console.log(item);
    }


    // const onSubmit = () => {
    //        items.push()
    // }
    const handleHeading = event => {
        setHeading(event.target.value);
    }

    const handleDesc = event => {
        setDescription(event.target.value);
    }

    const handleDate = event => {
        setDate(event.target.value);
    }

    const handleUser = event => {
        setUserAssigned(event.target.value);
        // console.log(userAssigned);
    }

    return <form onSubmit={handleFormData}
    style={{color: "grey", display:'flex', justifyContent:'center', alignItems:'center'}} 
    >
        <p>
            <label>Heading &nbsp;</label>
            <input type='text' placeholder='Enter Heading..' value={heading} onChange={handleHeading}></input>
        </p>
        <p>
            <label>Description &nbsp; </label>
            <input type='text' placeholder='Enter Desscripion..' value={description} onChange={handleDesc}></input>
        </p>
        <p>
            <label>Date &nbsp;</label>
            <input type='date' placeholder='select date..' value={date} onChange={handleDate}></input>
        </p>
        <p>
            <label>Assigned To &nbsp;</label>
            <select name='users' value={users.name} onChange={handleUser}>
            <option value="" disabled selected hidden>Select user to assign</option>
                {users.map( (e, key) => {
                    return <option key={e.id} value={e.name}>{e.name}</option>
                })}
            </select>
        </p>
        &nbsp;
        <button type='submit'>Submit</button>
    </form>
}

export default ToDoForm;
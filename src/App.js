import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import ToDoForm from './components/ToDoForm';
import UserJson from './Users.json';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'
import { useState } from 'react';

const App = (props) => {
  const users = [];

  const handleSubmit = (props) => {
    console.log(props);
  }

  const [todos, setTodos] = useState([]);

  const addTodoHandler = todo => {
    if(todo !== null){
      setTodos( prevTodos => {
        return [todo, ...prevTodos];
      });
    }
  }

  console.log(todos);

  let todoItem = todos.map( todo => (
    todo.heading?
    <ToDoItem
      key={todo.id}
      heading={todo.heading}
      description={todo.description}
      date={todo.date}
      userAssigned={todo.userAssigned}
     /> :
     null
  ));

  return (
    <div>
      <h1 style={{color: "blue", display:'flex', justifyContent:'center', alignItems:'center'}}>Todo Handler</h1>
      {/* <ToDoForm onSubmit={handleSubmit}/> */}
      <ToDoList onAddTodo={addTodoHandler}/>

      {todoItem}
      {/* <ToDoList /> */}
    </div>
  )
    
}

export default App;

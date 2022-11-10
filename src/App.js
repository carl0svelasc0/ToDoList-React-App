import React from "react";
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
// import './App.css';

const ToDos = [
  { text: "cortar cebolla1", completed: true },
  { text: "cortar cebolla2", completed: false },
  { text: "cortar cebolla3", completed: false }
]

function App() {
  return (
    <>
      <ToDoCounter />
      <ToDoSearch />
      
      <ToDoList>
        {ToDos.map(ToDo => (
          <ToDoItem
            key={ToDo.text} 
            text = {ToDo.text}
            completed = {ToDo.completed}
            />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </>
  );
}

export default App;

import React, { useState } from "react";
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
// import './App.css';

const defaultToDos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Cortar papel', completed: false },
  { text: 'Cortar carne', completed: true },
  { text: 'Cortar algo', completed: false },
];


function App() {
  const [toDos,setToDos] = useState(defaultToDos);
  const [searchValue,setSearchValue] = useState('');

  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
  const totalToDos = toDos.length;

  let searchedToDos = [];

  if (!searchValue.length >= 1) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter(toDo => { 
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  }

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newListToDos = [...toDos];
    newListToDos[toDoIndex].completed = true;
    setToDos(newListToDos);
  };

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newListToDos = [...toDos];
    newListToDos.splice(toDoIndex,1);
    setToDos(newListToDos);
  };

  return (
    <>
      <ToDoCounter
      total={totalToDos}
      completed={completedToDos}
      />
      <ToDoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      
      <ToDoList>
        {searchedToDos.map(toDo => (
          <ToDoItem
            key={toDo.text} 
            text = {toDo.text}
            completed = {toDo.completed}
            onComplete ={() => completeToDo(toDo.text)}
            onDelete ={() => deleteToDo(toDo.text)}
            />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </>
  );
}

export default App;

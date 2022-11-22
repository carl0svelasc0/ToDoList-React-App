import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider(props) {
    const {
        item: toDos,
        saveItem: saveToDos,
        error,
        loading,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

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
        saveToDos(newListToDos);
    };

    const addToDo = (text) => {
        const newListToDos = [...toDos];
        newListToDos.push({
            completed: false,
            text
        })
        saveToDos(newListToDos);
    };

    const deleteToDo = (text) => {
        const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
        const newListToDos = [...toDos];
        newListToDos.splice(toDoIndex, 1);
        saveToDos(newListToDos);
    };
    return (
        <ToDoContext.Provider value={{
            error,
            loading,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            addToDo,
            deleteToDo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext, ToDoProvider };

<ToDoContext.Consumer></ToDoContext.Consumer>
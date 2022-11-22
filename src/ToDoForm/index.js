import React from "react";
import { ToDoContext } from "../ToDoContext";
import './ToDoForm.css'

function ToDoForm() {
    const [newToDoValue, setNewToDoValue] = React.useState('');
    const {
        addToDo,
        setOpenModal
    } = React.useContext(ToDoContext);

    const onChange = (event) => {
        setNewToDoValue(event.target.value)
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Crear una nueva tarea</label>
            <textarea
            value={newToDoValue}
            onChange={onChange}
            placeholder="Escribe aqui tu tarea"
            />
            <div className="TodoForm-buttonContainer">
                <button
                onClick={onCancel}
                className="TodoForm-button TodoForm-button--cancel"
                type="button"                
                >
                    Cancelar
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { ToDoForm }
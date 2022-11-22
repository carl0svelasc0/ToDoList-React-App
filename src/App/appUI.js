import React from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { Modal } from '../Modal';
import { ToDoForm } from '../ToDoForm';


function AppUI() {
    const { error,
        loading,
        searchedToDos,
        completeToDo,
        deleteToDo,
        openModal,
        setOpenModal
    } = React.useContext(ToDoContext);

    return (<>
        <ToDoCounter />
        <ToDoSearch />
        <ToDoList>
            {error && <p>hubo un error!</p>}
            {loading && <p>Cargando...</p>}
            {(!loading && !searchedToDos.length) && <p>Crea tu primera tarea</p>}

            {searchedToDos.map(toDo => (
                <ToDoItem
                    key={toDo.text}
                    text={toDo.text}
                    completed={toDo.completed}
                    onComplete={() => completeToDo(toDo.text)}
                    onDelete={() => deleteToDo(toDo.text)}
                />
            ))}
        </ToDoList>

        {!!openModal && (
            <Modal Modal >
                <ToDoForm/>
            </Modal>
        )}


        <CreateToDoButton 
        setOpenModal={setOpenModal}
        />
    </>
    );
}

export { AppUI }
import React from "react";
import { ToDoProvider } from "../ToDoContext";
import { AppUI } from "./appUI";

function App() {
  

  return (
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
  );
}

export default App;

import { useState } from "react";

import tareasFijas from "./tareas.json";

import Form from "./components/Form";
import List from "./components/List";
import Item from "./components/Item";

function App() {
  const [tareas, setTareas] = useState(tareasFijas);
  console.log(tareas);

  const addTarea = (tarea) => {
    const nuevaTarea = {
      id: Date.now(),
      text: tarea,
    };
    setTareas([nuevaTarea, ...tareas]);
  };

  const resetTareas = () => {
    setTareas(tareasFijas);
  };

  const clearTareas = () => {
    setTareas([]);
  };

  const deleteTarea = (id) => {
    setTareas((prev) => prev.filter((tarea) => tarea.id !== id));
    // prev es el último estado del hook (tareas)
  };

  return (
    <main>
      <h1>TO-DO APP</h1>
      <Form
        addTarea={addTarea}
        resetTareas={resetTareas}
        clearTareas={clearTareas}
      />
      <List tareas={tareas} deleteTarea={deleteTarea} />
    </main>
  );
}

export default App;

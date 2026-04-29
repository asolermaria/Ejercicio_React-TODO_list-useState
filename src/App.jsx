import { useState, useEffect } from "react"; // Importamos hooks de React
import { v4 as uuidv4 } from "uuid"; // Importamos libreria de identificadores únicos

import tareasFijas from "./tareas.json";

import Form from "./components/Form";
import List from "./components/List";
import Item from "./components/Item";

function App() {
  const [tareas, setTareas] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // Se ejecuta una vez cuando el componente App se carga (iniciar aplicación)
  useEffect(() => {
    setTareas(tareasFijas);
  }, []);

  // console.log(tareas);

  const addTarea = (tarea) => {
    const nuevaTarea = {
      id: uuidv4(), // Genera un identificador único aleatorio
      text: tarea,
    };
    setTareas((prev) => [nuevaTarea, ...prev]);
    // prev es el último estado del hook (tareas)

    setMensaje("Tarea añadida");
    setTimeout(() => {
      setMensaje("");
    }, 5000);
  };

  const resetTareas = () => {
    setTareas([...tareasFijas]);
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
      {mensaje && <p>{mensaje}</p>}
      {/* Si hay mensaje, será truthy
          && si se cumple la primera condición (truthy), devuelve la siguiente (muestra el mensaje) */}
      <List tareas={tareas} deleteTarea={deleteTarea} />
    </main>
  );
}

export default App;

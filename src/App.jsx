import { useState } from "react";
import List from "./components/List";
import tareasFijas from "./tareas.json";

function App() {
  const [input, setInput] = useState("");
  const [tareas, setTareas] = useState(tareasFijas);

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    const nuevaTarea = {
      id: Date.now(),
      text: input,
    };
    setTareas([nuevaTarea, ...tareas]); // Añadimos tarea al array
    setInput(""); // Vaciamos el input cuando se envía
  };

  const resetTareas = () => {
    setTareas(tareasFijas);
  };

  return (
    <div>
      <h1>TO-DO APP</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      <List tareas={tareas} />
      <button onClick={resetTareas}>RESET</button>
    </div>
  );
}

export default App;

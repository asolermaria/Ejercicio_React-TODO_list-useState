import { useState } from "react";
import TodoList from "./components/List";

function App() {
  const [input, setInput] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setTareas([...tareas, input]); // Añadimos tarea al array
    setInput(""); // Vaciamos el input cuando se envía
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
      <TodoList tareas={tareas} />
    </div>
  );
}

export default App;

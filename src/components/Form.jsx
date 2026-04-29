import { useState } from "react";

function Form({ addTarea, resetTareas, clearTareas }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (!input.trim()) return; // Con trim quitamos espacios al principio y al final, si la tarea está vacía termina la función
    addTarea(input.trim()); // Llamamos a la función addTarea con el input quitamos espacios al principio y al final
    setInput(""); // Vaciamos el input cuando se envía
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      <button onClick={resetTareas}>RESET</button>
      <button onClick={clearTareas}>CLEAR</button>
    </div>
  );
}

export default Form;

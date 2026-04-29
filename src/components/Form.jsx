import { useState, useEffect } from "react";

function Form({ addTarea, resetTareas, clearTareas }) {
  const [input, setInput] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  useEffect(() => {
    if (!input.trim()) return; // Con trim quitamos espacios al principio y al final, si el input está vacío termina la función

    // Si hay algo en el input, espera 20s y lo borra
    const timer = setTimeout(() => {
      setInput("");
    }, 20000);

    return () => clearTimeout(timer); // Si el input cambia, reinicia el temporizador
  }, [input]); // Se ejecuta cada vez que cambia el input

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (input.trim().length < 6) {
      setMensajeError("La tarea debe contener al menos 6 caracteres");
      return;
    }
    setMensajeError(""); // Vaciamos el mensaje de error
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
        {input.trim() && <button type="submit">ADD</button>}
        {/* input.trim() si el string tiene contenido, será truthy
            && si se cumple la primera condición (truthy), devuelve la siguiente (muestra el botón) */}
        {mensajeError && <p>{mensajeError}</p>}
      </form>
      <button onClick={resetTareas}>RESET</button>
      <button onClick={clearTareas}>CLEAR</button>
    </div>
  );
}

export default Form;

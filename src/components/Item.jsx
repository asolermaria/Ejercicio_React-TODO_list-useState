function Item({ tarea, deleteTarea, setTareaEditando, completedTarea }) {
  return (
    <div>
      <p style={{ textDecoration: tarea.isDone ? "line-through" : "none" }}>
        {tarea.text}
      </p>
      <button onClick={() => deleteTarea(tarea.id)}>BORRAR</button>
      <button onClick={() => setTareaEditando(tarea)}>EDITAR</button>
      <button onClick={() => completedTarea(tarea.id)}>
        {tarea.isDone ? "DESHACER" : "COMPLETAR"}
      </button>
    </div>
  );
}

export default Item;

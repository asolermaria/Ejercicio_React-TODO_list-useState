function Item({ tarea, deleteTarea, setTareaEditando }) {
  return (
    <div>
      <p>{tarea.text}</p>
      <button onClick={() => deleteTarea(tarea.id)}>BORRAR</button>
      <button onClick={() => setTareaEditando(tarea)}>EDITAR</button>
    </div>
  );
}

export default Item;

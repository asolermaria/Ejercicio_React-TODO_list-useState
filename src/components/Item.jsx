function Item({ tarea, deleteTarea }) {
  return (
    <div>
      <p>{tarea.text}</p>
      <button onClick={() => deleteTarea(tarea.id)}>BORRAR</button>
    </div>
  );
}

export default Item;

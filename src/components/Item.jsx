function Item({ tarea, deleteTarea }) {
  return (
    <>
      <p>{tarea.text}</p>
      <button onClick={() => deleteTarea(tarea.id)}>BORRAR</button>
    </>
  );
}

export default Item;

import Item from "./Item";

function List({ tareas, deleteTarea, setTareaEditando }) {
  return (
    <div>
      {tareas.map((tarea) => (
        <Item
          key={tarea.id}
          tarea={tarea}
          deleteTarea={deleteTarea}
          setTareaEditando={setTareaEditando}
        />
      ))}
    </div>
  );
}

export default List;

import Item from "./Item";

function List({ tareas, deleteTarea, setTareaEditando, completedTarea }) {
  return (
    <div>
      {tareas.map((tarea) => (
        <Item
          key={tarea.id}
          tarea={tarea}
          deleteTarea={deleteTarea}
          setTareaEditando={setTareaEditando}
          completedTarea={completedTarea}
        />
      ))}
    </div>
  );
}

export default List;

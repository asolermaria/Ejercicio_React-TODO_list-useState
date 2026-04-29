import Item from "./Item";

function List({ tareas, deleteTarea }) {
  return (
    <div>
      {tareas.map((tarea) => (
        <Item key={tarea.id} tarea={tarea} deleteTarea={deleteTarea} />
      ))}
    </div>
  );
}

export default List;

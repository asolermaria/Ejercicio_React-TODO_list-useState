function List({ tareas }) {
  return (
    <div>
      {tareas.map((tarea, index) => (
        <p key={index}>{tarea}</p>
      ))}
    </div>
  );
}

export default List;
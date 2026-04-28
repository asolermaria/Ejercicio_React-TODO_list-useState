function List({ tareas }) {
  return (
    <div>
      {tareas.map((tarea, index) => (
        <p key={index}>{tarea.text }</p>
      ))}
    </div>
  );
}

export default List;
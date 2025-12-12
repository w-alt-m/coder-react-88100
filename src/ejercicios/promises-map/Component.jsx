import { useState } from "react";

export default function TaskListContainer() {
  const [listaTareas, setListaTareas] = useState([
    {
      id: 1,
      text: "Anotar ideas sueltas antes de olvidarlas",
      completed: false,
    },
    {
      id: 2,
      text: "Ordenar archivos que quedaron pendientes",
      completed: false,
    },
    {
      id: 3,
      text: "Responder mensajes acumulados",
      completed: false,
    },
    {
      id: 4,
      text: "Planear la semana con tareas simples",
      completed: false,
    },
    {
      id: 5,
      text: "Tomar un descanso corto para resetear",
      completed: false,
    },
  ]);

  const handleClick = (id) => {
    setListaTareas(
      listaTareas.map((tarea) => {
        if (tarea.id === id && tarea.completed === false) {
          return {
            ...tarea,
            completed: !tarea.completed,
          };
        } else {
          return tarea;
        }
      })
    );
  };

  const renderTasks = () => {
    return listaTareas.map((tarea) => {
      return (
        <div key={tarea.id} id={tarea.id}>
          <p>{tarea.text}</p>
          <button
            style={{ backgroundColor: tarea.completed ? "green" : "gray" }}
            onClick={() => handleClick(tarea.id)}
          >
            {tarea.completed ? "Completada" : "Pendiente"}
          </button>
        </div>
      );
    });
  };

  return <div>{renderTasks()}</div>;
}

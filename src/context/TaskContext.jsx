import React, { createContext, useState, useEffect } from "react";
import { tareas } from "../data/task";

export const TaskContext = createContext();
export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [tablaTasks, setTablaTasks] = useState([]);
  function createTask(tarea, descripcion) {
    setTasks([
      ...tasks,
      {
        title: tarea,
        id: tasks.length,
        description: descripcion,
      },
    ]);
    setTablaTasks([
      ...tasks,
      {
        title: tarea,
        id: tasks.length,
        description: descripcion,
      },
    ]);
  }

  function findTask (busqueda){
    var filterResult = tablaTasks.filter((task)=>{
      if(task.title.toLowerCase().includes(busqueda.toLocaleLowerCase())){
        return task;
      }
    })
    setTasks(filterResult);

  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  useEffect(() => {
    setTasks(tareas);
    setTablaTasks(tareas);
  },[]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        findTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

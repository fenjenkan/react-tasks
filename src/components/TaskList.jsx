import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";


const TaskList = () => {
  const {tasks} = useContext(TaskContext)
  if(tasks.length === 0){
    return <h1 className="text-4xl font-bold text-white mb-2 text-center">No hay tareas</h1>
  }
  return (
    <div className='grid grid-cols-4 gap-2'>
      {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;

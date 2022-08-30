import React, { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
const TaskForm = () => {
  const { createTask,findTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [description, setDescription] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    

    setTitle("");
    setDescription("");
  };

  const handleonChange = e =>{
    setBusqueda(e.target.value);
    findTask(e.target.value);
    
  }
  return (
    <div className="max-w-md mx-auto">
      <form
        action=""
        onSubmit={handelSubmit}
        className="bg-neutral-600 p-10 mb-4"
      >
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          value={busqueda}
          type="text"
          placeholder="Busqueda de tarea"
          onChange={handleonChange}
        />
        <h1 className="text-2xl font-bold text-white mb-2">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          value={title}
          type="text"
          placeholder="Escribe una tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full"
          value={description}
          name=""
          placeholder="escripe la descripcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button className="bg-indigo-400 p-2 rounded-lg text-white">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default TaskForm;

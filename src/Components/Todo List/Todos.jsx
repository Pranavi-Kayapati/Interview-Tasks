import React, { useState, useEffect } from "react";
import "./Todos.css";
const Todos = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="todos-container">
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add New Task..."
        />
        <button className="add" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {index + 1}. {task}{" "}
              <button className="delete" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;

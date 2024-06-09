//src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetail from './components/TaskDetail';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const viewTask = (id) => {
    const task = tasks.find(t => t.id === id);
    setSelectedTask(task);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
    setSelectedTask(null);
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, ...updatedTask } : t)));
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onView={viewTask} onDelete={deleteTask} />
      <TaskDetail task={selectedTask} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;


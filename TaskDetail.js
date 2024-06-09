//src/components/TaskDetails.js
import React from 'react';

const TaskDetail = ({ task, onEdit, onDelete }) => {
  if (!task) return <div>Select a task to view details.</div>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={() => onEdit(task.id)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskDetail;

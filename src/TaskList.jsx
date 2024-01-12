import React from 'react';
import Task from './Task';

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} name={task.name} completed={task.completed} />
      ))}
    </div>
  );
}

export default TaskList;

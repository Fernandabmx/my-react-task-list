import React from 'react';

function Task({ name, completed }) {
  return (
    <div>
      <input type="checkbox" checked={completed} />
      <span>{name}</span>
    </div>
  );
}

export default Task;

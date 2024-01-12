import React from 'react';
import Header from './Header';
import TaskList from './TaskList';

function App() {
  const tasks = [
    { name: 'Hacer la compra', completed: false },
    { name: 'Hacer ejercicio', completed: false },
    { name: 'Hacer  BMX', completed: true },
    // Agrega más tareas según sea necesario
  ];

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

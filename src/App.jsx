import React, { useState, useEffect } from 'react';
import Taskform from './components/Taskform';
import TaskBox from './components/TaskBox';

const App = () => {
  // Load tasks from local storage or initialize as an empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to handle deleting a task
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <>
    <div className='bg-gradient-to-r from-purple-200 to-violet-200'>
      <div className='text-2xl flex items-center justify-center '>To-Do Application</div>
      <Taskform setTask={setTasks} />
      <div className='SectionBox flex justify-evenly py-1 px-1 text-sky-600'>
        <TaskBox title='To-Do' tasks={tasks} status='To-do' handleDelete={handleDelete} />
        <TaskBox title='Doing' tasks={tasks} status='Doing' handleDelete={handleDelete} />
        <TaskBox title='Done' tasks={tasks} status='Done' handleDelete={handleDelete} />
      </div>
      </div>
    </>
  );
};

export default App;

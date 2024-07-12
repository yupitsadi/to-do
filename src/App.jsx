import React, { useState } from 'react';
import Taskform from './components/Taskform';
import TaskBox from './components/TaskBox';

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className='text-2xl flex items-center justify-center'>To-Do Application</div>
      <Taskform setTask={setTasks} />
      <div className='SectionBox flex justify-evenly py-1 px-1'>
        <TaskBox title='To-Do' tasks={tasks} status='To-do' />
        <TaskBox title='Doing' tasks={tasks} status='Doing' />
        <TaskBox title='Done' tasks={tasks} status='Done' />
      </div>
    </>
  );
};

export default App;

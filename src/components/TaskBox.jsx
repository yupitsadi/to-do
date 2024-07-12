import React from 'react';
import ToWork from './ToWork';

const TaskBox = ({ title, tasks, status }) => {
  return (
    <section className='w-1/3 bg-slate-200 mx-3 rounded-md'>
      <h1 className='flex justify-center'>{title}</h1>
      {
        tasks.filter(task => task.status === status).map((task, index) => (
          <ToWork key={index} task={task} />
        ))
      }
    </section>
  );
};

export default TaskBox;

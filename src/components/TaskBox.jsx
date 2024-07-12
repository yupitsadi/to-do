import React from 'react';
import ToWork from './ToWork';

const TaskBox = ({ title, tasks, status, handleDelete }) => {
  return (
    <section className='w-1/3 h-120 bg-sky-200 mx-3 rounded-md '  style={{ height: '38rem', backgroundColor: '#E0F2FE' }}>
      <h1 className='flex justify-center text-black text-xl'>{title}</h1>
      {
        tasks
          .map((task, index) => ({ ...task, originalIndex: index }))
          .filter(task => task.status === status)
          .map((task) => (
            <ToWork key={task.originalIndex} task={task} handleDelete={() => handleDelete(task.originalIndex)} />
          ))
      }
    </section>
  );
};

export default TaskBox;

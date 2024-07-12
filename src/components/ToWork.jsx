import React from 'react';
import bin from '../assets/delete.png';
import Tagform from './tagform';

const ToWork = ({ task }) => {
  console.log("Task:", task);
  return (
    <article className='border border-black rounded-md'>
      <h1 className='m-1'>{task.task}</h1>
      <div className='relative'>
        {task.tags.map((tag, index) => (
          <Tagform key={index} tagName={tag} />
        ))}
        <button>
          <img className='absolute right-0 top-0.5 mx-2' src={bin} alt='delete' />
        </button>
      </div>
    </article>
  );
};

export default ToWork;

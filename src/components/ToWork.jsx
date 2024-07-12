import React from 'react';
import bin from '../assets/delete.png';
import Tagform from './tagform';

const ToWork = ({ task, handleDelete }) => {
  const tagColour = (tagName) => task.tags.includes(tagName);

  return (
    <article className='border border-sky-400 rounded-md'>
      <h1 className='m-1'>{task.task}</h1>
      <div className='relative'>
        {task.tags.map((tag, idx) => (
          <Tagform key={idx} tagName={tag} tagColour={tagColour(tag)} tagHandle={() => {}} />
        ))}
        <button onClick={handleDelete}>
          <img className='absolute right-0 top-0.5 mx-2' src={bin} alt='delete' />
        </button>
      </div>
    </article>
  );
};

export default ToWork;

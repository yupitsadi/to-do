import React from 'react';

const Tagform = ({ tagName, tagHandle, tagColour }) => {
  
  const tagStyle = {
    Html: "rounded-full border border-red-100 px-3 py-0.5 dark:text-red-500 dark:border-sky-500/15 dark:bg-red-200 m-1 hover:bg-red-300 hover:text-white",
    Css: "rounded-full border border-violet-100  px-3 py-0.5 dark:text-violet-500 dark:border-violet-500/15 dark:bg-violet-300 m-1 hover:bg-violet-300 hover:text-white",
    JavaScript: "rounded-full border border-green-100 px-3 py-0.5 dark:text-green-500 dark:border-green-500/15 dark:bg-green-300 m-1 hover:bg-green-300 hover:text-white",
    React: "rounded-full border border-yelloe-100 px-3 py-0.5 dark:text-yellow-500 dark:border-yellow-500/15 dark:bg-yellow-100 m-1 hover:bg-yellow-300 hover:text-white",
    default: "rounded-full border border-sky-100 px-3 py-0.5 dark:text-sky-500 dark:border-sky-500/15 dark:bg-sky-500/10 m-1 hover:bg-sky-300 hover:text-white",
  };


  const getClassName = () => {
    return tagColour ? tagStyle[tagName] : tagStyle.default;
  };
  return (
    <button type='button' onClick={() => tagHandle(tagName)} className={getClassName()}>
      {tagName}
    </button>
  );
};

export default Tagform;

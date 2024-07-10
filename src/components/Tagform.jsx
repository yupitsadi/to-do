import React from 'react'

const Tagform = ({tagName , tagHandle}) => {
  return (
    <>
    <button type='button' onClick={()=> tagHandle(tagName)} className="rounded-full border border-sky-100 bg-sky-50 px-3 py-0.5 dark:text-sky-500 dark:border-sky-500/15 dark:bg-sky-500/10 m-1 hover:bg-sky-200 hover:text-white">{tagName}</button>
    </>
  )
}

export default Tagform
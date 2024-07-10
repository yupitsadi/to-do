import React from 'react'
import ToWork from './ToWork'

const TaskBox = (props) => {
  return (
    <>
    <section className='w-1/3 bg-slate-200 mx-3 rounded-md'>
    <h1 className=' flex justify-center'>{props.title}</h1>
    <ToWork/>
    </section>
    </>
  )
}

export default TaskBox
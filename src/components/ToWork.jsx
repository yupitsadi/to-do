import React from 'react'
import bin from '../assets/delete.png'
import Tagform from './tagform'

const ToWork = () => {
  return (
    <>
    <article className=' border border-black rounded-md'>
        <h1 className='m-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum delectus totam accusantium. Neque repellendus ab, ipsa porro similique quasi dicta accusamus molestiae quis optio minus velit, laboriosam, eius nostrum?
        </h1>
        <div className='relative'>
            <Tagform tagName='Html' />
            <Tagform tagName='JS' />
            <button><img className=' absolute right-0 top-0.5 mx-2'  src={bin} /></button>
        </div>

    </article>
    </>
  )
}

export default ToWork
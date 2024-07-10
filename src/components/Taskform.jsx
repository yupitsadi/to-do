import React, { useState } from "react";
import Tagform from "./Tagform";



const TaskForm = () => {

  const [taskData, setTaskData] = useState({
    task : "",
    status: "todo",
    tags : [],
  });

  const handleTheChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setTimeout(() => {
      setTaskData(prev =>{
        return{...prev, [name]:value}
      }
      )
    }, 2000);
    
  };
  
  const tagHandle = (tagName)=>{
    if(taskData.tags.some(item => item===tagName)){
      const filterData = taskData.tags.filter(item => item!==tagName);
      setTaskData(prev=>{
        return{...prev,tags:filterData}
      })
    }
    else{
      setTaskData(prev=>{
        return{...prev,tags:[...prev,tagName]}
      });
    }
  };
  const handleTheSubmit = (e)=>{
    e.preventDeafault();
    console.log(taskData);
  };

  return (
    <>
    <div className="flex justify-center">
      <header>
        <form onSubmit={handleTheSubmit} className="m-2 flex justify-center">
          <input
          name="task"
            type="text"
            className="pl-2 border-2 outline-2 border-solid w-80"
            placeholder="Enter Your task"
          
            onChange={handleTheChange}
          />
        </form>
        <div className="flex flex-row p-0" >
        <div className="tagFroms px-2">
          <Tagform tagName='Html' tagHandle={tagHandle} />
          <Tagform tagName='Css' tagHandle={tagHandle}  />
          <Tagform tagName='Java Script' tagHandle={tagHandle} />
          <Tagform tagName='React'tagHandle={tagHandle}  />
        </div>
        <select className="TaskOptions mx-4 p-2 border-2" name='status' onChange={handleTheChange}>
          <option value="To-do">To-do</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
        
        <button className=" p-1 bg-blue-500 text-sm text-white rounded-md ">+Add Task</button>
        </div>
      </header>
      </div>
    </>

  );
};

export default TaskForm;

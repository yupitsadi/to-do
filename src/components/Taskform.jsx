  import React, { useState } from "react";
  import Tagform from "./tagform";

  const TaskForm = () => {
    const [taskData, setTaskData] = useState({
      task: "",
      status: "todo",
      tags: [],
    });

    const handleTheChange = (e) => {
      const { name, value } = e.target;
      setTaskData((prev) => ({ ...prev, [name]: value }));
    };

    const tagColour = (tagName) => {
      return taskData.tags.some(item=> item === tagName);
    };

    const tagHandle = (tagName) => {
      if (taskData.tags.includes(tagName)) {
        const filteredTags = taskData.tags.filter((item) => item !== tagName);
        setTaskData((prev) => ({ ...prev, tags: filteredTags }));
      } else {
        setTaskData((prev) => ({ ...prev, tags: [...prev.tags, tagName] }));
      }
    };

    const handleTheSubmit = (e) => {
      e.preventDefault();
      console.log(taskData);
    };

    return (
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
          <div className="flex flex-row p-0">
            <div className="tagForms px-2">
              <Tagform tagName="Html" tagHandle={tagHandle} tagColour={tagColour("Html")} />
              <Tagform tagName="Css" tagHandle={tagHandle} tagColour={tagColour("Css")} />
              <Tagform tagName="JavaScript" tagHandle={tagHandle} tagColour={tagColour("JavaScript")} />
              <Tagform tagName="React" tagHandle={tagHandle} tagColour={tagColour("React")} />
            </div>
            <select className="TaskOptions mx-4 p-2 border-2" name="status" onChange={handleTheChange}>
              <option value="To-do">To-do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
            <button type="submit" className="p-1 bg-blue-500 text-sm text-white rounded-md">
              +Add Task
            </button>
          </div>
        </header>
      </div>
    );
  };

  export default TaskForm;

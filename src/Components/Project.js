import React, { useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import TaskList from './TaskList';
import { useDispatch } from 'react-redux';
import { addTask } from '../utils/taskSlice';

const Project = () => {
    const dispatch = useDispatch();
    const [buttonNewTask , setButtonNewTask] = useState(false);
    const [inputNewTask, setInputNewTask] = useState({ProjectId : '' ,TaskId : "", TaskName : "", TaskDes : ''});
    const id = useParams();
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate('/Dashboard');
    }
    const handleAddTask = () =>{
        
        setButtonNewTask(false);
        
        dispatch(addTask({
            projectId : inputNewTask.ProjectId,
            taskId : inputNewTask.TaskId,
            taskName : inputNewTask.TaskName,
            taskDescription : inputNewTask.TaskDes,
    }));
    }
    const handleInputTask = (e) =>{
        setInputNewTask({...inputNewTask,[e.target.name] : e.target.value});
    }
    const handleNewTask = () =>{
        const t = Math.floor(Math.random()*10000);
        console.log(t);
         
        setButtonNewTask(true);
        setInputNewTask({...inputNewTask, ProjectId : id.resId, TaskId : t})
    } 
    return (
    <div>
    <button onClick={handleBack} className=' bg-gray-300 text-black px-2 py-2 rounded-lg'>Back</button>
      <h1>Project</h1>
      <div>
      <button className='absolute right-6 bg-gray-300 text-black px-2 py-2 rounded-lg' onClick={handleNewTask}>New Task</button>
      {
        buttonNewTask ? 
        <form onSubmit={(e)=>e.preventDefault()} 
        className='bg-black absolute p-16 w-1/3 h-auto my-36 mx-auto left-0 right-0 text-white bg-opacity-70'>
        <h1 className='font-bold text-3xl my-3'>New Task</h1>
        <input className="bg-gray-950 w-full py-3 px-2 my-2 bg-opacity-85" type='text' 
        name='TaskName' value={inputNewTask.TaskName} placeholder='Task Name' onChange={handleInputTask}/>
        <input className="bg-gray-950 w-full py-3 px-2 my-2 bg-opacity-85" type='text' 
        name='TaskDes' value={inputNewTask.TaskDes} placeholder='Description' onChange={handleInputTask}/>
        <button className='w-full bg-red-600 px-2 py-3 my-2' onClick={handleAddTask}>Add</button>
        </form>
        : null
      }
      </div>
      <TaskList id={id}/>
    </div>
  )
}

export default Project

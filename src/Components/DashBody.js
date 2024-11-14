import React, { useState } from 'react'
import { addProject } from '../utils/projectSlice';
import { useDispatch } from 'react-redux';
import ProjectList from './ProjectList';
const DashBody = () => {
    const dispatch = useDispatch();
    const [buttonNewProject , setButtonNewProject] = useState(false);
    const [inputNewProject, setInputNewProject] = useState({Id : '' , ProjectName : "", ProjectDes : ''});
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const handleNewProject = () =>{
        let idgen = randomNumberInRange(1, 9999);
        setButtonNewProject(true);
        setInputNewProject({...inputNewProject, Id : idgen})
    }
    const handleAddProject = () =>{
     
        setButtonNewProject(false);
        dispatch(addProject({
            id : inputNewProject.Id,
            projectName : inputNewProject.ProjectName,
            Description : inputNewProject.ProjectDes,
    }));
    }
    const handleInputProject = (e) =>{
        setInputNewProject({...inputNewProject,[e.target.name] : e.target.value});
    }
  return (
    <div>
      <div>
      <button className='absolute right-6 bg-gray-300 text-black px-2 py-2 rounded-lg' onClick={handleNewProject}>New Project</button>
      {
        buttonNewProject ? 
        <form onSubmit={(e)=>e.preventDefault()} 
        className='bg-black absolute p-16 w-1/3 h-auto my-36 mx-auto left-0 right-0 text-white bg-opacity-70'>
        <h1 className='font-bold text-3xl my-3'>New Project</h1>
        <input className="bg-gray-950 w-full py-3 px-2 my-2 bg-opacity-85" type='text' 
        name='ProjectName' value={inputNewProject.ProjectName} placeholder='Project Name' onChange={handleInputProject}/>
        <input className="bg-gray-950 w-full py-3 px-2 my-2 bg-opacity-85" type='text' 
        name='ProjectDes' value={inputNewProject.ProjectDes} placeholder='Description' onChange={handleInputProject}/>
        <button className='w-full bg-red-600 px-2 py-3 my-2' onClick={handleAddProject}>Add</button>
        </form>
        : null
      }
      </div>
      <ProjectList/>
    </div>
  )
}

export default DashBody

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../utils/taskSlice';

const TaskList = ({id}) => {
    const dispatch = useDispatch();
    const taskList = useSelector(store => store?.task?.tasks); 
    const handleDelete = (e) =>{
    /*    const id = Number(e.target.id);
        const index = taskList.findIndex((task)=>task.taskId===id);
        const list = taskList;
        list.splice(index,1);
        setBooksList(list);*/
        dispatch(deleteTask(e.target.id))
    }
  return (
    <div>
      <h1>Task List</h1>
      <table className='table-auto'>
        <thead>
            <tr>
                <th>Task Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
        {taskList.filter((task)=>{return task.projectId === id.resId}).map((task)=>{
            return(
                <div>
                    <tr>
                        <td>{task.taskName}</td>
                        <td>{task.taskDescription}</td>
                        <button className='bg-gray-300 text-black px-2 py-2 rounded-lg'>Edit</button>
                        <button onClick={handleDelete} id={task.taskId} className=' bg-gray-300 text-black px-2 py-2 rounded-lg'>Delete</button>
                    </tr>
                </div>
            )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default TaskList

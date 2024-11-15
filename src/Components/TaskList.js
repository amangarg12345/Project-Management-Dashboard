import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../utils/taskSlice';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

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
      <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskList.filter((task)=>{return task.projectId === id.resId}).map((task) => (
            <TableRow
              key={task.taskId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {task.taskName}
              </TableCell>
              <TableCell align="right">{task.taskDescription}</TableCell>
              <TableCell align="right"><Button>Edit</Button>
              <Button onClick={handleDelete} id={task.taskId}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default TaskList

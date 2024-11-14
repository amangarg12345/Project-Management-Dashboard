import { createSlice } from "@reduxjs/toolkit";
const taskSlice = createSlice({
    name : "task",
    initialState : {
        tasks : [{projectId : '1', taskId : '1', taskName :"Task11" , taskDescription :"Task Description"},
            {projectId : '2' ,taskId : '2',taskName :"Task21" , taskDescription :"Task Description"},
            {projectId : '1', taskId : '3', taskName :"Task12" , taskDescription :"Task Description"},
            {projectId : '2' , taskId : '4',taskName :"Task22" , taskDescription :"Task Description"},
            {projectId : '1', taskId : '5',taskName :"Task13" , taskDescription :"Task Description"},
            {projectId : '2' ,taskId : '6',taskName :"Task23" , taskDescription :"Task Description"}
        ]
    },
    reducers : {
        addTask : (state,action) =>{
            state.tasks = [...state.tasks , action.payload]
        },
        deleteTask : (state,action) =>{
            state.tasks = state.tasks.filter((task) => task.taskId !== action.payload);
        },
    },
});
export const {addTask,deleteTask} = taskSlice.actions;
export default taskSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
const taskSlice = createSlice({
    name : "task",
    initialState : {
        tasks : [{projectId : '1', taskId : '1', taskName :"Task11" , taskDescription :"Task Description"},
            {projectId : '2' ,taskId : '2',taskName :"Task21" , taskDescription :"Task Description"},
            {projectId : '1', taskId : '3', taskName :"Task12" , taskDescription :"Task Description"},
            {projectId : '2' , taskId : '4',taskName :"Task22" , taskDescription :"Task Description"},
            {projectId : '1', taskId : '5',taskName :"Task13" , taskDescription :"Task Description"},
            {projectId : '2' ,taskId : '6',taskName :"Task23" , taskDescription :"Task Description"},
            {projectId : '1', taskId : '7', taskName :"Task14" , taskDescription :"Task Description"},
            {projectId : '2' ,taskId : '8',taskName :"Task24" , taskDescription :"Task Description"},
            {projectId : '1', taskId : '9', taskName :"Task15" , taskDescription :"Task Description"},
            {projectId : '2' , taskId : '10',taskName :"Task25" , taskDescription :"Task Description"},
            {projectId : '1', taskId : '11',taskName :"Task16" , taskDescription :"Task Description"},
            {projectId : '2' ,taskId : '12',taskName :"Task26" , taskDescription :"Task Description"},
            {projectId : '1', taskId : '13', taskName :"Task17" , taskDescription :"Task Description"},
            {projectId : '2' ,taskId : '14',taskName :"Task27" , taskDescription :"Task Description"},
            {projectId : '1', taskId : '15', taskName :"Task18" , taskDescription :"Task Description"},
            {projectId : '2' , taskId : '16',taskName :"Task28" , taskDescription :"Task Description"},
            {projectId : '1', taskId : '17',taskName :"Task19" , taskDescription :"Task Description"},
            {projectId : '2' ,taskId : '18',taskName :"Task29" , taskDescription :"Task Description"}
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
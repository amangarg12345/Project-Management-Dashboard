import { createSlice } from "@reduxjs/toolkit";
const projectSlice = createSlice({
    name : "project",
    initialState : {
        projects : [{id : '1', projectName :"GPT" , Description :"Chat App"},
            {id : '2' ,projectName :"Hotel" , Description :"Hotel Management"}
        ]
    },
    reducers : {
        addProject : (state,action) =>{
            state.projects = [...state.projects , action.payload]
        },
    },
});
export const {addProject} = projectSlice.actions;
export default projectSlice.reducer;
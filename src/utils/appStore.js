import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import projectReducer from './projectSlice'
import taskReducer from './taskSlice'
const appStore = configureStore({
    reducer : {
        user : userReducer,
        project : projectReducer,
        task : taskReducer,
    },
});
export default appStore
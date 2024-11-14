import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import SignInOut from './SignInOut';
const Body = () => {
    const AppRouter = createBrowserRouter([
        {
           path : "/",
           element : <Home/>
        },
        {
            path : "/signInOut",
            element : <SignInOut/>
         }
    ]);
  return (
    <div>
      <RouterProvider router={AppRouter}></RouterProvider>
    </div>
  )
}
export default Body;
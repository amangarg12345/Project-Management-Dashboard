import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import SignInOut from './SignInOut';
import Dashboard from './Dashboard';
const Body = () => {
    const AppRouter = createBrowserRouter([
        {
           path : "/",
           element : <Home/>
        },
        {
            path : "/signInOut",
            element : <SignInOut/>
         },
         {
          path : "/Dashboard",
          element : <Dashboard/>
       }
    ]);
  return (
    <div>
      <RouterProvider router={AppRouter}></RouterProvider>
    </div>
  )
}
export default Body;
import { signOut } from "firebase/auth";
import auth from "../utils/firebase";
import DashNavBar from "./DashNavBar";
import DashBody from "./DashBody";
const Dashboard = () => {
    const toggleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          
    }
  return (
    <div>
        <h3 className="w-100 text-4xl m-5">Welcome To Dashboard</h3>
      <button className="absolute right-6 top-6 bg-red-600 text-white px-2 py-2" onClick={toggleSignOut}>Sign out</button>
      <div className="flex flex-wrap">
        <DashNavBar/>
        <DashBody/>
      </div>
    </div>
  )
}
export default Dashboard
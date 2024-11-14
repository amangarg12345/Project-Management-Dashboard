import React from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react'
import auth from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email} = user;
          dispatch(addUser({
            uid : uid,
            email : email,
          }));
          navigate('/Dashboard');
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser(null));
          navigate('/SignInOut');
        }
      });
},[])
  return (
    <div className='h-14 m-3'>
      <h3 className='w-100 text-4xl m-5'>Welcome Project Management Dashboard</h3>
    </div>
  )
}
export default Header
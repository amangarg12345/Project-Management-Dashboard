import { useRef, useState } from 'react'
import Validate from '../utils/Validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import auth from '../utils/firebase';
import Header from './Header';

const SignInOut = () => {
    const [isSignIn,setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const mail = useRef(null);
    const password = useRef(null);
    const toggleSignUp = () =>{
        setIsSignIn(!isSignIn);
    }
    const handleLogin = () =>{
        const message = Validate(mail.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return;
        if(!isSignIn){
            //Sign Up
            createUserWithEmailAndPassword(auth, mail.current.value, password.current.value)
                .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                 })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
                // ..
                });
        }else{
            signInWithEmailAndPassword(auth,mail.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ..
                 })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
        }
    }
  return (
    <div>
        <Header/>
        <form onSubmit={(e)=>e.preventDefault()} className='bg-black absolute p-16 w-1/3 h-auto my-36 mx-auto left-0 right-0 text-white bg-opacity-70'>
        <h1 className='font-bold text-3xl my-3'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input className="bg-gray-950 w-full py-3 px-2 my-2 bg-opacity-85" type='text' placeholder='Full Name'/>}
        <input className="bg-gray-950 w-full py-3 px-2 my-2 bg-opacity-85" ref = {mail} type='text' placeholder='Email or Mobile Number'/>
        <input className="bg-gray-950 w-full py-3 px-2 my-2 bg-opacity-85" ref={password} type='password' placeholder='Password'/>
        <p className='text-red-600 text-xl'>{errorMessage}</p>
        <button className='w-full bg-red-600 px-2 py-3 my-2' onClick={handleLogin}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className='my-4 px-2 cursor-pointer' onClick={toggleSignUp}>
            {isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default SignInOut
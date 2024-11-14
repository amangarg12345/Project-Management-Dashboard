import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Home = () => {
  return (
    <div>
      <Header/>
        <div className='absolute top-60 px-4 py-2 left-48 text-center '><p className='text-7xl  text-red-600  bg-black bg-opacity-20'>Welcome To Dashboard</p>
        <Link to="/SignInOut"><button className='m-5 px-7 py-2 bg-red-600 bg-opacity-90 text-2xl text-white'>SignIn</button></Link></div>
    </div>
    
  )
}

export default Home;
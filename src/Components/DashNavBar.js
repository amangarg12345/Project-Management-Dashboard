import React from 'react'

const DashNavBar = () => {
  return (
    <div className='shadow-gray-700 m-2 bg-gray-100 h-screen rounded-lg'>
      <div className="flex h-10 w-52 rounded-lg hover:bg-gray-400 justify-center p-1 m-1">
                <span className="pl-4 w-32 h-5 m-1 text-2xl">Home</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-400 justify-center p-1 m-1">
                <span className="pl-4 w-32 h-5 m-1 text-2xl">Projects</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-400 justify-center p-1 m-1">
                <span className="pl-4 w-32 h-5 m-1 text-2xl">User</span>
            </div>
    </div>
  )
}

export default DashNavBar

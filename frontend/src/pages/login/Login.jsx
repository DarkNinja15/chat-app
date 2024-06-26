import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [userName,setUsername]=useState();
  const [password,setPassword]=useState();

  const {loading,login}=useLogin();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await login(userName,password);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto p-6'>
        <div className="
    h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
      <h1 className='text-3xl font-semibold text-center text-gray-300 p-6'>
        Login 
      <span className='text-500'> to Chit Chat</span>
      </h1>
      <form className='p-2' onSubmit={handleSubmit}>
        <div >
            <label className='label'>
                <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter userName' className='w-full input input-bordered h-10' value={userName} onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
        <div>
            <label className='label'>
                <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <Link to="/signup" className='hover:text-blue-50 mt-2 inline-block text-sm hover:underline'>{"Don't"}have and account</Link>
        <div>
        <button className="btn btn-primary bg-gray-200 mt-2 hover:bg-white" disabled={loading}>
          {loading? <span className='loading loading-spinner'></span>:"Login"}
        </button>
        </div>
      </form>
    </div>
    </div> 
  )
}

export default Login

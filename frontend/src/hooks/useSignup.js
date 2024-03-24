import React, { useState } from 'react'
import toast from 'react-hot-toast';

function useSignup() {
  const [loading,setLoading]=useState(false);
  const signup=async({fullName,userName,password,confirmPassword,gender})=>{
    const success = handleInputErrors({fullName,userName,password,confirmPassword,gender});
    console.log(success);
    if(!success) return;
    setLoading(true);
    try {
      const res=await fetch("/api/auth/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({fullName,userName,password,confirmPassword,gender})
      });
      const data=await res.json();
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally{
      setLoading(false);
    }
  }
  return {loading,signup};
}

export default useSignup


function handleInputErrors({fullName,userName,password,confirmPassword,gender}) {
  console.log(fullName);
  console.log(userName);
  console.log(password);
  console.log(confirmPassword);
  console.log(gender);
  if(!fullName || !userName || !password || !confirmPassword || !gender){
    toast.error('Please fill all the fields')
    return false;
  }
  if(password!==confirmPassword){
    toast.error('Passwords do not match')
    return false;
  }
  if(password.length<6){
    toast.error('Password length should be greater than 6 characters')
    return false;
  }
  return true;
}

import axios from 'axios'
import React,{useState} from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import { baseURL } from '../utils/baseURL'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 const navigate=useNavigate()

  const handelLogin=async(e)=>{
    e.preventDefault()
  const {data}=await axios.post( baseURL+"login",{email,password})
  if (data?.success) {
    alert(data.message);
    localStorage.setItem("token", JSON.stringify(data?.token));
    localStorage.setItem("id", data?.existingUser._id);
    console.log(data?.existingUser.isAdmin)
    if(data?.existingUser.isAdmin){
      localStorage.setItem("role", "admin");
      navigate('/create')
    }
    else{
      localStorage.setItem("role", "user");
      navigate('/home')

    }
  }
  else{
    alert(data?.message);

  }
  window.location.reload();
}
  return (
    
<div className="h-[100vh] flex flex-col justify-center items-center bg-gradient-to-tr from-[#84b3f8] via-[#98aced] to-[#b89ac7]">
  <div className="text-3xl font-montserrat text-center mb-10"> Login</div>

<form className="w-[90%] md:w-[40%] p-10 border-2 border-gray-500 rounded-lg ">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-lg font-montserrat text-gray-900 ">Email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none" placeholder="name@gmail.com" required 
    value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-lg font-montserrat text-gray-900 ">Password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full outline-none p-2.5 " required
    value={password} onChange={(e) => setPassword(e.target.value)} />
  </div>
  <div className="mb-2 cursor-pointer">Not Registered Yet<Link to={'/register'}> <span className='underline text-blue-700'>Register</span></Link></div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" 
  onClick={handelLogin}>Login</button>
</form>
</div>

  )
}

export default Login

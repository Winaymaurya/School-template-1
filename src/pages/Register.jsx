import axios from 'axios'
import React,{useState} from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import { baseURL } from '../utils/baseURL'

const Register = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
 const navigate=useNavigate()


  const handelRegister=async(e)=>{
    e.preventDefault()
  const {data}=await axios.post(baseURL+"register",{email,password,name})
  if (data?.success) {
    alert(data.message);
  }
  else{
    alert(data?.message);
  }
  navigate('/')
 
}
  return (
    
<div className="h-[100vh] flex flex-col justify-center items-center bg-gradient-to-tr from-[#84b3f8] via-[#98aced] to-[#b89ac7]">
  <div className="text-3xl font-montserrat text-center mb-10"> Register</div>

<form className="w-[90%] md:w-[40%] p-10 border-2 border-gray-500 rounded-lg ">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-lg font-montserrat text-gray-900 ">Name</label>
    <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none" placeholder="Your Name" required 
    value={name} onChange={(e) => setName(e.target.value)}/>
  </div>
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
  <div className="mb-2 cursor-pointer">Already Register<Link to={'/'}> <span className='underline text-blue-700'>Login</span></Link></div>
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" 
  onClick={handelRegister}>Register</button>
</form>
</div>

  )
}

export default Register

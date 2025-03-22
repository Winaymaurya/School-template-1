import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import {motion} from "framer-motion"
const Navbar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false); // Close the navbar when scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);
  
  return (
    <>
      <div className="flex justify-between items-end p-[14px] px-10 sticky top-0 bg-gray-200 z-20">
        <div className=""><FaSchool size={36}/></div>
             
             <div className="text-xl uppercase font-semibold font-montserrat my-1"> School Academy</div>
          <ul className=" hidden md:flex  space-x-4 ">
            <li className="bg-gray-300 h-10 w-10 rounded-full flex items-center justify-center ">
              <FaFacebookF className='text-blue-600 hover:scale-110' size={20} />
            </li>
            <li className="bg-gray-300 h-10 w-10 rounded-full flex items-center justify-center ">
              <FaLinkedinIn className='text-blue-600 hover:scale-110' size={20} />
            </li>
            <li className="bg-gray-300 h-10 w-10 rounded-full flex items-center justify-center ">
              <FaInstagram className='text-red-600 hover:scale-110' size={24} />
            </li>
          </ul>
       
          </div>
      
      <div className=' p-2 tracking-wide text-md  font-montserrat font-light  bg-gray-800 text-white sticky top-16 z-50 w-[100%] h-10'>
        <div className="  px-40 hidden md:flex justify-between">
          <div className="">
            <NavLink to='/' className={({ isActive }) =>
              isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
            }>Home</NavLink>
          </div>
          <div className="">
            <NavLink to='/About' className={({ isActive }) =>
              isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
            }>About</NavLink>
          </div>
          <div className="">
            <NavLink to='/Academics' className={({ isActive }) =>
              isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
            }>Academics</NavLink>
          </div>
          <div className="">
            <NavLink to='/Events' className={({ isActive }) =>
              isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
            }>Events</NavLink>
          </div>
          <div className="">
            <NavLink to='/Student' className={({ isActive }) =>
              isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
            }>Students</NavLink>
          </div>
          <div className="">
            <NavLink to='/Admission' className={({ isActive }) =>
              isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
            }>Admissions</NavLink>
          </div>
          <div className="">
            <NavLink to='/Gallery' className={({ isActive }) =>
              isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
            }>Gallery</NavLink>
          </div>
          <div className="">
            <NavLink to='/Contact' className={({ isActive }) =>
              isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
            }>Contact</NavLink>
          </div>

        </div>

        <div className="md:hidden absolute right-5">
          {open ?
            <div className=" text-xl cursor-pointer" onClick={() => setOpen(false)}>
              <IoCloseSharp size={24}/>
            </div>
            :
            <div className=" text-xl cursor-pointer" onClick={() => setOpen(true)}>
              <RiMenu2Line size={24}/>
            </div>
          }
        </div>

      </div>
      {open
        ?
        <motion.div className=" w-[100%] md:hidden  bg-gray-800 flex flex-col pb-4 items-center border-b-2 border-white fixed top-[100px]  space-y-2 z-10"
        initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.4,type:"tween"}}>
        <div className="">
          <NavLink to='/' className={({ isActive }) =>
            isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
          }>Home</NavLink>
        </div>
        <div className="">
          <NavLink to='/About' className={({ isActive }) =>
            isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
          }>About</NavLink>
        </div>
        <div className="">
          <NavLink to='/Academics' className={({ isActive }) =>
            isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
          }>Academics</NavLink>
        </div>
        <div className="">
          <NavLink to='/Events' className={({ isActive }) =>
            isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
          }>Events</NavLink>
        </div>
        <div className="">
          <NavLink to='/Student' className={({ isActive }) =>
            isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
          }>Students</NavLink>
        </div>
        <div className="">
          <NavLink to='/Admission' className={({ isActive }) =>
            isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
          }>Admissions</NavLink>
        </div>
        <div className="">
          <NavLink to='/Gallery' className={({ isActive }) =>
            isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
          }>Gallery</NavLink>
        </div>
        <div className="">
          <NavLink to='/Contact' className={({ isActive }) =>
            isActive ? 'text-purple-300 p-1 hover:text-purple-300' : 'text-white p-1 hover:text-purple-300'
          }>Contact</NavLink>
        </div>

      </motion.div>
        :
        ''
      }


    </>
  );
};

export default Navbar;

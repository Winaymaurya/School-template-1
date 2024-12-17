import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Navbar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="flex justify-between p-[12px] px-10 sticky top-0 bg-gray-200 z-20">
        <div className=""><FaSchool size={36}/></div>
    
          <ul className="flex  space-x-4">
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
      <div className=' p-2 tracking-wide text-md  font-montserrat font-light bg-gray-800 text-white sticky top-16 z-50 w-[100%]'>
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
        <div className="md:hidden">
          {open ?
            <div className=" text-xl cursor-pointer" onClick={() => setOpen(false)}>
              <IoCloseSharp />
            </div>
            :
            <div className=" text-xl cursor-pointer" onClick={() => setOpen(true)}>
              <RiMenu2Line />
            </div>
          }
        </div>
      </div>
      {open
        ?
        <div className={`flex flex-col items-center justify-between h-48 px-2 p-4 tracking-wide text-md text-white font-montserrat font-light bg-gray-800 md:hidden top-10 md:top-14 absolute w-full z-20`}
          data-aos='fade-down'
          data-aos-duration="300">
          <div className="">
            <NavLink to='/' className={({ isActive }) =>
              isActive ? 'border-t-2 border-white-300 p-1' : 'text-white p-1'
            }>Home</NavLink>
          </div>
          <div className="">
            <NavLink to='/book' className={({ isActive }) =>
              isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
            }>Book Tickets</NavLink>
          </div>
          <div className="">
            <NavLink to='/myBooking' className={({ isActive }) =>
              isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
            }>My Bookings</NavLink>
          </div>


        </div>
        :
        ''
      }


    </>
  );
};

export default Navbar;

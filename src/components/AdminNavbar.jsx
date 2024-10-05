import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
const adminNavbar = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>

            <div className='flex justify-between px-2 p-[10px] tracking-wide text-md  font-montserrat font-light bg-gray-800 text-white sticky top-0 z-50'>
                <div className=" tracking-wider  text-xl">Ticket.com</div>
                <div className="justify-between w-[30%] mr-10 hidden md:flex   ">
                    <div className="">
                        <NavLink to='/create' className={({ isActive }) =>
                            isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
                        }>Create Ticket</NavLink>
                    </div>
                    {/* <div className="">
                        <NavLink to='/school' className={({ isActive }) =>
                            isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
                        }>School</NavLink>
                    </div>
                    <div className="">
                        <NavLink to='/student' className={({ isActive }) =>
                            isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
                        }>Student</NavLink>
                    </div> */}
                    <div className="">
                        <NavLink to='/profile' className={({ isActive }) =>
                            isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
                        }>Profile</NavLink>
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
                <div className={`flex flex-col items-center justify-between h-24 px-2 p-4 tracking-wide text-md text-white font-montserrat font-light bg-gray-800 md:hidden top-10 md:top-14 absolute w-full z-20`}
                    data-aos='fade-down'
                    data-aos-duration="300">
                      <div className="">
                        <NavLink to='/create' className={({ isActive }) =>
                            isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
                        }>Create Ticket</NavLink>
                    </div>
                    {/* <div className="">
                        <NavLink to='/school' className={({ isActive }) =>
                            isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
                        }>School</NavLink>
                    </div>
                    <div className="">
                        <NavLink to='/student' className={({ isActive }) =>
                            isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
                        }>Student</NavLink>
                    </div> */}
                    <div className="">
                        <NavLink to='/profile' className={({ isActive }) =>
                            isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
                        }>Profile</NavLink>
                    </div>
                </div>
                :
                ''
            }


        </>
    );
};

export default adminNavbar;

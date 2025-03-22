import React from "react";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { FaSchool } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const rise = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.9 } },
  };

  const rise2 = {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.9, delay: 0.3 },
    },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref,{amount:0.5});

  return (
    <>
    
    <div
      ref={ref}
      className="bg-gray-800 flex md:flex-row flex-col justify-around py-10 md:py-16  md:items-start items-center mt-10  
      h-[75vh] md:h-auto overflow-y-auto md:overflow-visible
       "
    >
      <div className="text-white md:block  flex md:space-x-0 space-x-4 text-[30px]  md:text-[40px] mb-4"> <FaSchool/> <div className="text-xl uppercase font-semibold font-montserrat my-1"> School Academy</div> </div>
      <div className=" w-[70%] md:w-auto mb-8 md:mb-0 ">
        <motion.div
          className="uppercase text-purple-200 tracking-wider text-xl mb-4 font-light text-center"
          variants={rise}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          Quick Navigation
        </motion.div>
        <motion.div
          className="flex justify-between text-white font-light tracking-wider  "
          variants={rise2}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <div className="flex flex-col">
            <Link to={"/"} className="my-2 mr-2">
              Home
            </Link>
            <Link to={"/About"} className="my-2 mr-2">
              About
            </Link>
            <Link to={"/Event"} className="my-2 mr-2">
              Events
            </Link>
            <Link to={"/Academics"} className="my-2 mr-2">
              Academics
            </Link>
          </div>
          <div className="flex flex-col text-right">
            <Link to={"/Student"} className="my-2 mr-2">
              Students
            </Link>
            <Link to={"/Gallery"} className="my-2 mr-2">
              Gallery
            </Link>
            <Link to={"/Contact"} className="my-2 mr-2">
              Contact
            </Link>
            <Link to={"/Admission"} className="my-2 mr-2">
              Admissions
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="w-[70%] md:w-auto mb-8 md:mb-0 ">
        <motion.div
          className="uppercase text-purple-200 tracking-wider mb-4 text-xl font-light text-center"
          variants={rise}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          Stay Connected
        </motion.div>
        <motion.div
          className="flex flex-col text-white font-light tracking-wider md:text-left text-center"
          variants={rise2}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <Link to={"/Student"} className="my-2 mr-2">
            LinkedIn
          </Link>
          <Link to={"/Gallery"} className="my-2 mr-2">
            Facebook
          </Link>
          <Link to={"/Contact"} className="my-2 mr-2">
            YouTube
          </Link>
          <Link to={"/Admission"} className="my-2 mr-2">
            Twitter
          </Link>
        </motion.div>
      </div>
      <div className="w-[70%] md:w-auto mb-8 md:mb-0 ">
        <motion.div
          className="uppercase text-purple-200 tracking-wider mb-4 text-xl font-light md:text-left text-center"
          variants={rise}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          Get in Touch
        </motion.div>
        <motion.div
          className="flex flex-col text-white font-light tracking-wider md:text-left text-center" 
          variants={rise2}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <div className="my-2 mr-2">123, ABC Street</div>
          <div className="my-2 mr-2">Lucknow, UP</div>
          <div className="my-2 mr-2 flex items-center justify-center md:justify-start ">
            <IoCall /> &nbsp; 12303562
          </div>
          <div className="my-2 mr-2 flex items-center justify-center md:justify-start">
            <MdMail size={20} /> &nbsp; school@gmail.com
          </div>
        </motion.div>
      </div>
    </div>
    <div className="text-center font-light text-[12px] md:text-sm my-1 tracking-wider">&copy; 2025 by School Academy Powered by WeTe Solutions.</div>
    </>
  );
};

export default Footer;

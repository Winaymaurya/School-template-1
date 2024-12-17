import React from "react";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
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
    <div
      ref={ref}
      className="bg-gray-800 flex justify-around py-16 items-start mt-10"
    >
      <div className="text-white text-[40px]">Logo</div>
      <div>
        <motion.div
          className="uppercase text-purple-200 tracking-wider text-xl mb-4 font-light"
          variants={rise}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          Quick Navigation
        </motion.div>
        <motion.div
          className="flex justify-between text-white font-light tracking-wider"
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
          <div className="flex flex-col">
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
      <div>
        <motion.div
          className="uppercase text-purple-200 tracking-wider mb-4 text-xl font-light"
          variants={rise}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          Stay Connected
        </motion.div>
        <motion.div
          className="flex flex-col text-white font-light tracking-wider"
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
      <div>
        <motion.div
          className="uppercase text-purple-200 tracking-wider mb-4 text-xl font-light"
          variants={rise}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          Get in Touch
        </motion.div>
        <motion.div
          className="flex flex-col text-white font-light tracking-wider"
          variants={rise2}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <div className="my-2 mr-2">123, ABC Street</div>
          <div className="my-2 mr-2">Lucknow, UP</div>
          <div className="my-2 mr-2 flex items-center">
            <IoCall /> &nbsp; 12303562
          </div>
          <div className="my-2 mr-2 flex items-center">
            <MdMail size={20} /> &nbsp; school@gmail.com
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;

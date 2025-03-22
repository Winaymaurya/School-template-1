import React from 'react'
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa";
const Home = () => {

  const rise={
    initial : { opacity: 0, y: 40 },

    animate : {
       opacity: 1, y: 0 ,
    transition : {
       type: "tween", 
       duration: 0.8 
      },
    }
  }
  return (
    <>
      <Navbar />
      <div className="h-[86vh] -z-10  bg-red-100 bg-cover bg-center flex items-center "
       style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?t=st=1734096708~exp=1734100308~hmac=4f03e9d49649b9285ad8670fa6604a70a6ebf60b402f48abcd9b3aafcc6d3a24&w=996')",
        backgroundAttachment: "fixed", // Parallax background effect
      }}>
        <motion.div className=" bg-[#6229d3] h-[50vh] md:h-[60vh] w-[90%] md:w-[42%] ml-4 md:ml-20  p-4 md:pl-10 bg-opacity-95 flex justify-center flex-col"
        variants={rise}
        initial="initial"
        animate="animate"
>
          <h1 className='text-white text-[42px] md:text-[70px] text-shadow-2xl font-normal'>Back to School</h1>
          <div className='text-white text-[35px]'>Welcome to all of <br /> our students</div>
          <motion.button className=' bg-gray-800 border-2 border-gray-800 shadow-lg mt-6 text-white p-2 w-40 hover:border-white hover:border-2'
          whileHover={{scale:1.03}}>Discover More</motion.button>
        </motion.div>
        </div>

        <div className="min-h-[100vh] mx-10 flex flex-col md:flex-row justify-evenly items-center"> 
        
        <motion.div className=" my-8  md:w-[25%] h-[50vh] md:h-[65vh] border-b-2 border-blue-500 flex flex-col justify-between items-center "
        initial={{opacity:0,y:60}}
        whileInView={{opacity:1,y:0}}
        transition={{type:"tween",delay:0.1,duration:1}}
        >
          <div className="h-[50%] w-[90%] ">
            <img src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/16592/220-SM712587.jpg" alt="" />
          </div>
          <div className=" text-center  text-blue-500 font-semibold tracking-wider text-2xl ">Pre Kindergarten</div>
          <div className="text-center font-light ">Counting objects, inside and outside, longer and shorter, letter names, rhyming words, and more.</div>
          <button className=' bg-blue-500 text-white p-2 mb-6 flex justify-evenly items-center w-36 border-2 hover:bg-white hover:text-blue-500 hover:border-blue-500'>Learn More <FaArrowRight/></button>
        </motion.div> 



        <motion.div className="my-8  md:w-[25%] h-[50vh] md:h-[65vh] border-b-2 border-red-600 flex flex-col justify-between items-center "
          initial={{opacity:0,y:60}}
          whileInView={{opacity:1,y:0}}
          transition={{type:"tween",delay:0.3,duration:1}}>
          <div className="h-[50%] w-[90%] ">
            <img src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/10094/20-SM273031.jpg" alt="" />
          </div>
          <div className=" text-center e text-red-600 font-semibold tracking-wider text-2xl "> Kindergarten</div>
          <div className="text-center font-light ">Counting objects, inside and outside, longer and shorter, letter names, rhyming words, and more.</div>
          <button className=' bg-red-600 text-white p-2 mb-6 flex justify-evenly items-center w-36
          border-2 hover:bg-white hover:text-red-600 hover:border-red-600'>Learn More <FaArrowRight/></button>
        </motion.div> 
        <motion.div className="my-8  md:w-[25%] h-[50vh] md:h-[65vh] border-b-2 border-orange-400 flex flex-col justify-between items-center "
          initial={{opacity:0,y:60}}
          whileInView={{opacity:1,y:0}}
          transition={{type:"tween",delay:0.5,duration:1}}>
          <div className="h-[50%] w-[90%] ">
            <img src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/17070/15-SM743637.jpg" alt="" />
          </div>
          <div className=" text-center  text-orange-500 font-semibold tracking-wider text-2xl ">Elementary</div>
          <div className="text-center font-light ">Counting objects, inside and outside, longer and shorter, letter names, rhyming words, and more.</div>
         <button className=' bg-orange-500 border-2 text-white p-2 mb-6 flex justify-evenly items-center w-36 hover:bg-white hover:text-orange-500 hover:border-orange-500'>Learn More <FaArrowRight/></button>
        </motion.div> 

        </div>

    </>
  )
}

export default Home

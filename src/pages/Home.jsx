import React,{useEffect} from 'react'
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa";
import { TurnedIn } from '@mui/icons-material';
import Testimonials from '../components/Testimonial';
import DynamicHelmet from '../components/DynamicHelmet';
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
   useEffect(()=>{
     window.scroll(0,0)
    },[])
  return (
    <>
    <DynamicHelmet/>
      <Navbar />
      <div className="relative">
      {/* Background Section */}
      <div
        className="h-[86vh] bg-cover bg-center flex items-center "
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?t=st=1734096708~exp=1734100308~hmac=4f03e9d49649b9285ad8670fa6604a70a6ebf60b402f48abcd9b3aafcc6d3a24&w=996')",
          backgroundAttachment: "fixed", // For parallax effect
        }}
      >
        <motion.div
          className=" h-[50vh] md:h-[60vh] w-[90%] md:w-[80%] ml-4 md:ml-20 p-4 md:pl-10 flex flex-col justify-center items-center"
          variants={rise}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-purple-100 text-[42px] md:text-[100px] text-shadow-2xl font-normal text-shadow hover:text-shadow-md cursor-pointer" 
          >
            Back to School
          </h1>
          <div className="text-white text-[35px]">
            Welcome to all of our students
          </div>
          <motion.button
            className="bg-gray-800 border-2 border-gray-800 shadow-lg mt-6 text-white p-2 w-40 hover:border-white hover:border-2"
            whileHover={{ scale: 1.03 }}
          >
            Discover More
          </motion.button>
        </motion.div>
      </div>

      {/* SVG Wave with multiple waves */}
      <svg
        className="absolute -bottom-5 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff" // Change this to your desired color
          fillOpacity="1"
          d="M0,224L30,213.3C60,203,120,181,180,181.3C240,181,300,203,360,202.7C420,203,480,181,540,181.3C600,181,660,203,720,202.7C780,203,840,181,900,181.3C960,181,1020,203,1080,213.3C1140,224,1200,224,1260,213.3C1320,203,1380,181,1410,170.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>

        <div className="min-h-[100vh] mx-10 flex flex-col md:flex-row justify-evenly items-center"> 
        
        <motion.div className=" my-8  md:w-[25%] h-[40vh] md:h-[50vh] border-b-4 border-blue-500 flex flex-col justify-between items-center  "
        initial={{opacity:0,y:60}}
        whileInView={{opacity:1,y:0}}
        transition={{type:"tween",delay:0.1,duration:0.4}}
        whileHover={{scale:1.05}}
        viewport={{ once:true, amount: 0.7 }}>
          <div className="h-[50%] w-[90%] rounded-md ">
            <img src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/16592/220-SM712587.jpg" alt="" className='rounded-2xl' />
          </div>
          <div className=" text-center  text-blue-500 font-semibold tracking-wider text-2xl ">Pre Kindergarten</div>
          <div className="text-center font-light mb-10 ">Counting objects, inside and outside, longer and shorter, letter names, rhyming words, and more.</div>
          {/* <button className=' bg-blue-500 text-white p-2 mb-6 flex justify-evenly items-center w-36 border-2 hover:bg-white hover:text-blue-500 hover:border-blue-500'>Learn More <FaArrowRight/></button> */}
        </motion.div> 



        <motion.div className="my-8  md:w-[25%] h-[40vh] md:h-[50vh] border-b-4 border-red-600 flex flex-col justify-between items-center "
          initial={{opacity:0,y:60}}
          whileInView={{opacity:1,y:0}}
          transition={{type:"tween",delay:0.3,duration:0.4}}
          whileHover={{scale:1.05}}
          viewport={{  once:true,amount: 0.7 }}>
          <div className="h-[50%] w-[90%] ">
            <img src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/10094/20-SM273031.jpg" alt="" className='rounded-2xl'/>
          </div>
          <div className=" text-center e text-red-600 font-semibold tracking-wider text-2xl "> Kindergarten</div>
          <div className="text-center font-light mb-10">Counting objects, inside and outside, longer and shorter, letter names, rhyming words, and more.</div>
         
        </motion.div> 
        <motion.div className="my-8  md:w-[25%] h-[40vh] md:h-[50vh] border-b-4 border-orange-400 flex flex-col justify-between items-center "
          initial={{opacity:0,y:60}}
          whileInView={{opacity:1,y:0}}
          transition={{type:"tween",delay:0.5,duration:0.4}}
          whileHover={{scale:1.05}}
          viewport={{once:true,  amount: 0.7 }}>
          <div className="h-[50%] w-[90%] ">
            <img src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/17070/15-SM743637.jpg" alt=""className='rounded-2xl' />
          </div>
          <div className=" text-center  text-orange-500 font-semibold tracking-wider text-2xl ">Elementary</div>
          <div className="text-center font-light mb-10">Counting objects, inside and outside, longer and shorter, letter names, rhyming words, and more.</div>
         
        </motion.div> 

        </div>
    <Testimonials/>
    </>
  )
}

export default Home

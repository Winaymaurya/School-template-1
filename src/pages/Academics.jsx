import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import DynamicHelmet from '../components/DynamicHelmet';
const Academics = () => {
    const rise = {
        initial: { opacity: 0, y: 40 },

        animate: {
            opacity: 1, y: 0,
            transition: {
                type: "tween",
                duration: 0.9,

            },
        }
    }
    useEffect(()=>{
        window.scroll(0,0)
       },[])
    return (
        <>
            <Navbar />
            <DynamicHelmet/>
     <div className="relative">
              {/* Background Section */}
              <div
                className="h-[60vh] bg-cover bg-center flex items-start "
                style={{
                  backgroundImage:
                    "url('https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?t=st=1734096708~exp=1734100308~hmac=4f03e9d49649b9285ad8670fa6604a70a6ebf60b402f48abcd9b3aafcc6d3a24&w=996')",
                  backgroundAttachment: "fixed", // For parallax effect
                }}
              >
               <motion.div className='flex flex-col justify-center items-center z-10 md:h-[40vh] '
          variants={rise}
          initial="initial"
          animate="animate">
          <div className="text-[50px] md:text-[70px] font-normal text-center mt-6 uppercase"
          > Academics
          </div>
          <div className="text-[15px] md:text-[20px] font-extralight text-center mt-2 w-[90%] md:w-[50%]"
          > I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </div>
  
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

            <div className=" mx-10 md:mx-16 flex flex-col md:flex-row justify-evenly items-center flex-wrap">
                <motion.div className=" my-8 m-1 md:w-[25%] h-[50vh] md:h-[65vh] border-b-2 border-blue-500 flex flex-col justify-between items-center "
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", delay: 0.1, duration: 1 }}
                >
                    <div className="h-[50%] w-[90%] ">
                        <img src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/16592/220-SM712587.jpg" alt="" />
                    </div>
                    <div className=" text-center  text-blue-500 font-semibold tracking-wider text-2xl ">Pre Kindergarten</div>
                    <div className="text-center font-light ">Counting objects, inside and outside, longer and shorter, letter names, rhyming words, and more.</div>
                    <button className=' bg-blue-500 text-white p-2 mb-6 flex justify-evenly items-center w-36 border-2 hover:bg-white hover:text-blue-500 hover:border-blue-500'>Learn More <FaArrowRight /></button>
                </motion.div>



                <motion.div className="my-8 m-1  md:w-[25%] h-[50vh] md:h-[65vh] border-b-2 border-red-600 flex flex-col justify-between items-center "
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", delay: 0.3, duration: 1 }}>
                    <div className="h-[50%] w-[90%] ">
                        <img src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/10094/20-SM273031.jpg" alt="" />
                    </div>
                    <div className=" text-center e text-red-600 font-semibold tracking-wider text-2xl "> Kindergarten</div>
                    <div className="text-center font-light ">Counting objects, inside and outside, longer and shorter, letter names, rhyming words, and more.</div>
                    <button className=' bg-red-600 text-white p-2 mb-6 flex justify-evenly items-center w-36
          border-2 hover:bg-white hover:text-red-600 hover:border-red-600'>Learn More <FaArrowRight /></button>
                </motion.div>
                <motion.div className="my-8 m-1  md:w-[25%] h-[50vh] md:h-[65vh] border-b-2 border-orange-400 flex flex-col justify-between items-center "
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", delay: 0.5, duration: 1 }}>
                    <div className="h-[50%] w-[90%] ">
                        <img src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/17070/15-SM743637.jpg" alt="" />
                    </div>
                    <div className=" text-center  text-orange-500 font-semibold tracking-wider text-2xl ">Elementary</div>
                    <div className="text-center font-light ">Counting objects, inside and outside, longer and shorter, letter names, rhyming words, and more.</div>
                    <button className=' bg-orange-500 border-2 text-white p-2 mb-6 flex justify-evenly items-center w-36 hover:bg-white hover:text-orange-500 hover:border-orange-500'>Learn More <FaArrowRight /></button>
                </motion.div>

                <motion.div className="mb-8 md:w-[25%] h-[50vh] md:h-[65vh] border-b-2 border-green-500 flex flex-col justify-between items-center "
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", delay: 0.5, duration: 1 }}
                >
                    <div className="h-[50%] w-[90%] ">
                        <img src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/4480/20-SM124626.jpg" alt="" />
                    </div>
                    <div className=" text-center  text-green-500 font-semibold tracking-wider text-2xl ">Science (Maths)</div>
                    <div className="text-center font-light ">Counting objects, inside and outside, longer and shorter, letter names, rhyming words, and more.</div>
                    <button className=' bg-green-500 text-white p-2 mb-6 flex justify-evenly items-center w-36 border-2 hover:bg-white hover:text-green-500 hover:border-green-500'>Learn More <FaArrowRight /></button>
                </motion.div>
                <motion.div className="md:w-[25%] m-1 mb-8 h-[50vh] md:h-[65vh] border-b-2 border-purple-600 flex flex-col justify-between items-center "
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", delay: 0.7, duration: 1 }}>
                    <div className="h-[50%] w-[90%] ">
                        <img src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/13133/220-SM450677.jpg" alt="" />
                    </div>
                    <div className=" text-center e text-purple-600 font-semibold tracking-wider text-2xl "> Science (Biology)</div>
                    <div className="text-center font-light ">Counting objects, inside and outside, longer and shorter, letter names, rhyming words, and more.</div>
                    <button className=' bg-purple-600 text-white p-2 mb-6 flex justify-evenly items-center w-36
          border-2 hover:bg-white hover:text-purple-600 hover:border-purple-600'>Learn More <FaArrowRight /></button>
                </motion.div>
                <motion.div className="md:w-[25%] m-1 mb-8 h-[50vh] md:h-[65vh] border-b-2 border-orange-400 flex flex-col justify-between items-center "
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", delay: 0.9, duration: 1 }}>
                    <div className="h-[50%] w-[90%] ">
                        <img src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/2595/20-SM98724.jpg" alt="" />
                    </div>
                    <div className=" text-center  text-orange-500 font-semibold tracking-wider text-2xl ">Commerce</div>
                    <div className="text-center font-light ">Counting objects, inside and outside, longer and shorter, letter names, rhyming words, and more.</div>
                    <button className=' bg-orange-500 border-2 text-white p-2 mb-6 flex justify-evenly items-center w-36 hover:bg-white hover:text-orange-500 hover:border-orange-500'>Learn More <FaArrowRight /></button>
                </motion.div>

            </div>

        </>
    )
}

export default Academics

import React from 'react'
import Navbar from '../components/Navbar'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
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
    return (
        <>
            <Navbar />
            <motion.div className='flex flex-col justify-center items-center -z-10  md:h-[50vh]'
                variants={rise}
                initial="initial"
                animate="animate">
                <div className="text-[50px] md:text-[70px] uppercase font-normal text-center mt-6"
                > Academics
                </div>
                <div className="text-[15px] md:text-[20px] font-extralight text-center mt-2 w-[90%]  md:w-[50%]"
                > I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </div>
            </motion.div>

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

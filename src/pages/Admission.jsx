import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
const Admission = () => {
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
    <Navbar/>
    <motion.div className='flex flex-col justify-center items-center -z-10  h-[50vh]'
                variants={rise}
                initial="initial"
                animate="animate">
                <div className="text-[70px] uppercase font-normal text-center mt-6"
                > Admissions
                </div>
                <div className="text-[20px] font-extralight text-center mt-2  w-[50%]"
                > I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </div>

            </motion.div>
    
    <div className="mx-20">
      <div className="text-3xl tracking-wider text-center capitalize">Admission for batch 2025-26 will be starting soon</div>
    </div>
    <div className="mx-40 flex justify-evenly items-center h-[24vh]">
    <button className=' bg-blue-500 border-2 text-white p-2 mb-6 flex justify-evenly items-center w-60 hover:bg-white hover:text-blue-500 hover:border-blue-500'>Download brochure <FaArrowRight/></button>
    <button className=' bg-blue-500 border-2 text-white p-2 mb-6 flex justify-evenly items-center w-60 hover:bg-white hover:text-blue-500 hover:border-blue-500'>Download Fee Structure <FaArrowRight/></button>
    </div>
    </>
  )
}

export default Admission

import React from 'react'
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import PhotoGallery from '../components/PhotoGallery';

const Gallery = () => {
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
    <div className='bg-gray-100'>
        <Navbar/>
        <motion.div className='flex flex-col justify-center items-center -z-10  h-[50vh]'
                variants={rise}
                initial="initial"
                animate="animate">
                <div className="text-[70px] font-normal text-center  uppercase"
                > Picture Gallery
                </div>
                <div className="text-[20px] font-extralight text-center mt-2  w-[50%]"
                > I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </div>

            </motion.div>


           <div className="h-[80vh] p-4">
            <Carousel/>
            </div> 

            <div className="mx-20 mt-10">
                <div className=" text-[30px] font-normal uppercase tracking-wide">Annual Function</div>
                <PhotoGallery/>
            </div>

            <div className="mx-20 mt-10">
                <div className=" text-[30px] font-normal uppercase tracking-wide">Labs</div>
                <PhotoGallery/>
            </div>
            <div className="mx-20 mt-10">
                <div className=" text-[30px] font-normal uppercase tracking-wide">Classroom</div>
                <PhotoGallery/>
            </div>


    </div>
  )
}

export default Gallery
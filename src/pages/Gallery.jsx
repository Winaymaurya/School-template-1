import React,{useEffect} from 'react'
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import PhotoGallery from '../components/PhotoGallery';
import DynamicHelmet from '../components/DynamicHelmet';

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
    useEffect(()=>{
        window.scroll(0,0)
       },[])
  return (
    <div className='bg-gray-100'>
        <DynamicHelmet/>
        <Navbar/>
        <motion.div className='flex flex-col justify-center items-center -z-10  md:h-[30vh]'
                variants={rise}
                initial="initial"
                animate="animate">
                <div className="text-[50px] md:text-[70px] font-normal text-center  uppercase"
                > Picture Gallery
                </div>
                <div className="text-[15px] md:text-[20px] font-extralight text-center mt-2 w-[90%] md:w-[50%]"
                > I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </div>

            </motion.div>


           <div className="h-[40vh] md:h-[60vh] ">
            <Carousel/>
            </div> 

            <div className="mx-4 md:mx-20 mt-6">
                <div className=" text-[40px] font-normal uppercase tracking-wide text-center">Annual Function</div>
                <PhotoGallery/>
            </div>
            <div className="mx-4 md:mx-20 mt-6">
                <div className=" text-[40px] font-normal uppercase tracking-wide text-center">Labs</div>
                <PhotoGallery/>
            </div>
            <div className="mx-4 md:mx-20 mt-6">
                <div className=" text-[40px] font-normal uppercase tracking-wide text-center">ClassRooms</div>
                <PhotoGallery/>
            </div>
            <div className="mx-4 md:mx-20 mt-6">
                <div className=" text-[40px] font-normal uppercase tracking-wide text-center">school</div>
                <PhotoGallery/>
            </div>

            


    </div>
  )
}

export default Gallery
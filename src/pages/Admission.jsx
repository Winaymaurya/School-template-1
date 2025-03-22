import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import DynamicHelmet from '../components/DynamicHelmet';
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
    useEffect(()=>{
      window.scroll(0,0)
     },[])
  return (
    <>
    <Navbar/>
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
            <div className="text-[50px] md:text-[70px] font-normal text-center mt-6"
            > ADMISSIONS
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
    
    <div className="mx-8 md:mx-20 mt-8">
      <div className="text-2xl md:text-3xl tracking-wider text-center capitalize">Admission for batch 2025-26 will be starting soon</div>
    </div>
    <div className="mx-8 md:mx-40 flex flex-col md:flex-row justify-evenly items-center h-[24vh]">
    <button className=' bg-blue-500 border-2 text-white p-2 mb-6 flex justify-evenly items-center w-60 hover:bg-white hover:text-blue-500 hover:border-blue-500'>Download brochure <FaArrowRight/></button>
    <button className=' bg-blue-500 border-2 text-white p-2 mb-6 flex justify-evenly items-center w-60 hover:bg-white hover:text-blue-500 hover:border-blue-500'>Download Fee Structure <FaArrowRight/></button>
    </div>
    </>
  )
}

export default Admission

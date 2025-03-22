import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
import CountUp from 'react-countup'
const Student = () => {
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
    const students = [
      {
        img: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/18807/220-SS864281.jpg",
        class: '10th',
        name: "Sona Sharma",
        mark: '96.5 %',
      },
      {
        img: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/18807/220-SS864281.jpg",
        class: '10th',
        name: "Sona Sharma",
        mark: '96.5 %',
      },
      {
        img: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/18807/220-SS864281.jpg",
        class: '10th',
        name: "Sona Sharma",
        mark: '96.5 %',
      },
      {
        img: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/18807/220-SS864281.jpg",
        class: '10th',
        name: "Sona Sharma",
        mark: '96.5 %',
      },
     
    ]
    const { ref, inView } = useInView({
      triggerOnce: true, 
      threshold: 0.5,       
    });
  return (
    <>
    <Navbar/>
  
    <motion.div className='flex flex-col justify-center items-center -z-10  md:h-[50vh]'
                variants={rise}
                initial="initial"
                animate="animate">
                <div className="text-[50px] md:text-[70px] uppercase mx-4 font-normal text-center mt-6"
                > Our Students
                </div>
                <div className="text-[15px] md:text-[20px] font-extralight text-center mt-2 w-[90%]  md:w-[50%]"
                > I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </div>

            </motion.div>

     <div className=" mx-4 md:mx-20 mt-10 md:mt-0">
      <div className="text-3xl uppercase tracking-wide"> Our Toppers -</div>
      <div className=" flex justify-evenly flex-wrap">

{students.map((t, index) => (
  <motion.div className="w-[40%] md:w-[20%] m-4 cursor-pointer bg-gray-100 p-2 rounded-lg" key={index}
  initial={{opacity:0,y:60}}
  whileInView={{opacity:1,y:0}}
  transition={{duration:0.3,once:true,type:'tween',delay:index*.3}}
  whileHover={{scale:0.96,opacity:0.95}}>
    <div className="h-32 md:h-44 w-full flex justify-center items-center " >
      <img
        src={t.img}
        className="h-full w-40 object-cover object-top rounded-lg"
        alt=""
      />
    </div>
    <div className="font-semibold font-montserrat flex justify-evenly flex-col items-center my-2">
      <div className="text-md md:text-xl text-blue-900 text-center">{t.name}</div>
      <div className="text-blue-900">Class : {t.class}</div>
      <div className="font-medium ">{t.mark}</div>
    </div>
  </motion.div>
))}


</div>

     </div>


     <div
      ref={ref}
      className="bg-gray-100 h-[35vh] mb-10 mt-4 m-0 flex justify-center items-center space-x-2 md:space-x-4 font-montserrat md:h-[50vh] md:m-10 md:mx-[114px] rounded-lg"
    >
      {/* Classes */}
      <div className="border-r-2 border-gray-400 p-4 w-40 md:w-60">
        <div className="text-center text-[35px] md:text-[60px] text-blue-800">
          {inView && <CountUp start={1} end={40} duration={3} />}+
        </div>
        <div className="text-center md:text-[20px]">Classes</div>
      </div>

      {/* Teachers */}
      <div className="border-r-2 border-gray-400 p-4 w-40 md:w-60">
        <div className="text-center text-[35px] md:text-[60px] text-blue-800">
          {inView && <CountUp start={1} end={70} duration={2} />}+
        </div>
        <div className="text-center md:text-[20px]">Teachers</div>
      </div>

      {/* Students */}
      <div className="w-40 md:w-60">
        <div className="text-center text-[35px] md:text-[60px] text-blue-800">
          {inView && <CountUp start={1} end={400} duration={5} />}+
        </div>
        <div className="text-center md:text-[20px]">Students</div>
      </div>
    </div>
 
    </>
  )
}

export default Student

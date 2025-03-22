import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
import CountUp from 'react-countup'
import DynamicHelmet from '../components/DynamicHelmet';
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
    useEffect(()=>{
      window.scroll(0,0)
     },[])
  return (
    <>
    <DynamicHelmet/>
    <Navbar/>
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
          > OUR STUDENTS
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

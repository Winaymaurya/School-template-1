import React, { useRef,useEffect } from 'react'
import Navbar from '../components/Navbar'
import { motion, useInView } from 'framer-motion';
import DynamicHelmet from '../components/DynamicHelmet';
const About = () => {
  const principalRef = useRef(null);
  const managerRef = useRef(null);

  const isPrincipalInView = useInView(principalRef, { amount: 0.5 });
  const isManagerInView = useInView(managerRef, { amount: 0.5 });
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

  const teacher = [
    {
      img: "https://img.freepik.com/free-photo/portrait-professor-work-educational-system_23-2151737187.jpg?t=st=1734337647~exp=1734341247~hmac=8113710e9392f2545b64227b11179c257061f928b614c51023664079d58a998c&w=360",
      position: 'Principal',
      name: "Mr Vinay Kumar Maurya",
      contact: 'Vinay@gmail.com',
    },
    {
      img: "https://img.freepik.com/free-photo/portrait-professor-work-educational-system_23-2151737187.jpg?t=st=1734337647~exp=1734341247~hmac=8113710e9392f2545b64227b11179c257061f928b614c51023664079d58a998c&w=360",
      position: 'Vice Principal',
      name: "Mr XYZ Sharma",
      contact: 'XYZ@gmail.com',
    },
    {
      img: "https://img.freepik.com/free-photo/portrait-professor-work-educational-system_23-2151737187.jpg?t=st=1734337647~exp=1734341247~hmac=8113710e9392f2545b64227b11179c257061f928b614c51023664079d58a998c&w=360",
      position: 'Principal',
      name: "Mr Vinay Kumar Maurya",
      contact: 'Vinay@gmail.com',
    },
    {
      img: "https://img.freepik.com/free-photo/portrait-professor-work-educational-system_23-2151737187.jpg?t=st=1734337647~exp=1734341247~hmac=8113710e9392f2545b64227b11179c257061f928b614c51023664079d58a998c&w=360",
      position: 'Principal',
      name: "Mr Vinay Kumar Maurya",
      contact: 'Vinay@gmail.com',
    },
    {
      img: "https://img.freepik.com/free-photo/portrait-professor-work-educational-system_23-2151737187.jpg?t=st=1734337647~exp=1734341247~hmac=8113710e9392f2545b64227b11179c257061f928b614c51023664079d58a998c&w=360",
      position: 'Principal',
      name: "Mr Vinay Kumar Maurya",
      contact: 'Vinay@gmail.com',
    },
    {
      img: "https://img.freepik.com/free-photo/portrait-professor-work-educational-system_23-2151737187.jpg?t=st=1734337647~exp=1734341247~hmac=8113710e9392f2545b64227b11179c257061f928b614c51023664079d58a998c&w=360",
      position: 'Principal',
      name: "Mr Vinay Kumar Maurya",
      contact: 'Vinay@gmail.com',
    },
  ]
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
        > OUR SCHOOL
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
   


      {/* PRincipal */}
      <motion.div className="min-h-[75vh]  mt-10 flex flex-col md:flex-row items-center justify-center"
             initial={{opacity:0,y:60}}
             whileInView={{opacity:1,y:0}}
             transition={{type:"tween",delay:0.3,duration:0.4}}
      
             viewport={{  once:true,amount: 0.5 }}>
        <div className="w-[90%] md:w-[40%] h-[40vh] md:h-[75vh]">
          <img
            src="https://img.freepik.com/free-photo/smiling-business-man-sitting-empty-office-desk_1262-5631.jpg?t=st=1734153319~exp=1734156919~hmac=33fb2b74fc5aad587b40a73f319950fbe5c1207ce8f0e3c5c11d53dd7e592673&w=360"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="w-[90%] md:w-[40%]  md:h-[75vh] bg-gray-800 px-10 flex flex-col justify-center">
          <div className=" text-[35px] md:text-[40px] tracking-wide text-blue-300 md:mb-12">
            Principal's Message
          </div>
          <motion.div
            ref={principalRef}
            className="text-white text-sm md:text-lg tracking-wide font-light flex justify-around flex-col   h-[35vh]    md:h-[40vh]"
            variants={rise}
            initial="initial"
            animate={isPrincipalInView ? "animate" : ""}
          >
            <div>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </div>
            <div>
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your own company.
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Manager's Message */}
      <motion.div className="min-h-[75vh] mt-10 flex flex-col md:flex-row-reverse items-center justify-center"
             initial={{opacity:0,y:60}}
             whileInView={{opacity:1,y:0}}
             transition={{type:"tween",delay:0.3,duration:0.4}}
             
             viewport={{  once:true,amount: 0.5 }}>
        <div className="w-[90%] md:w-[40%] h-[40vh] md:h-[75vh]">
          <img
            src="https://img.freepik.com/free-photo/smiling-business-man-sitting-empty-office-desk_1262-5631.jpg?t=st=1734153319~exp=1734156919~hmac=33fb2b74fc5aad587b40a73f319950fbe5c1207ce8f0e3c5c11d53dd7e592673&w=360"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="w-[90%] md:w-[40%]  md:h-[75vh] bg-gray-800 px-10 flex flex-col justify-center">
          <div className=" text-[35px] md:text-[40px] tracking-wide text-blue-300 md:mb-12">
            Manager's Message
          </div>
          <motion.div
            ref={managerRef}
            className="text-white text-sm md:text-lg tracking-wide font-light flex justify-around flex-col   h-[35vh]    md:h-[40vh]"
            variants={rise}
            initial="initial"
            animate={isManagerInView ? "animate" : ""}
          >
            <div>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </div>
            <div>
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your own company.
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Founder */}
      <motion.div className="min-h-[75vh]  mt-10 flex flex-col md:flex-row items-center justify-center"
             initial={{opacity:0,y:60}}
             whileInView={{opacity:1,y:0}}
             transition={{type:"tween",delay:0.3,duration:0.4}}
        
             viewport={{  once:true,amount: 0.5 }}>
        <div className="w-[90%] md:w-[40%] h-[40vh] md:h-[75vh]">
          <img
            src="https://img.freepik.com/free-photo/smiling-business-man-sitting-empty-office-desk_1262-5631.jpg?t=st=1734153319~exp=1734156919~hmac=33fb2b74fc5aad587b40a73f319950fbe5c1207ce8f0e3c5c11d53dd7e592673&w=360"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="w-[90%] md:w-[40%]  md:h-[75vh] bg-gray-800 px-10 flex flex-col justify-center">
          <div className="text-[35px] md:text-[40px] tracking-wide text-blue-300 md:mb-12 ">
           Founder's Message
          </div>
          <motion.div
            className="text-white text-sm md:text-lg tracking-wide font-light flex justify-around flex-col   h-[35vh]    md:h-[40vh]"
            variants={rise}
            initial="initial"
            animate= "animate" 
          >
            <div>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </div>
            <div>
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your own company.
            </div>
          </motion.div>
        </div>
      </motion.div>




      <motion.div className='flex flex-col justify-center items-center -z-10  h-[50vh] '
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4,once:true, type: "tween", delay: 0.6 }}>
        <div className=" text-[50px] md:text-[70px] font-normal text-center mt-6"
        > STAFF DIRECTORY
        </div>
        <div className=" text-[15px] md:text-[20px] font-extralight text-center mt-2 w-[90%] md:w-[50%]"
        > I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </div>

      </motion.div>


      <div className=" flex justify-evenly flex-wrap">

        {teacher.map((t, index) => (
          <motion.div className="w-[40%] md:w-[20%] mx-2 md:mx-10 my-4 cursor-pointer" key={index}
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.3,once:true,type:'tween',delay:index*.2}}
          whileHover={{scale:0.96,opacity:0.95}}>
            <div className="h-40 md:h-60">
              <img
                src={t.img}
                className="h-full w-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="font-semibold font-montserrat">
              <div className=" text-sm md:text-md text-blue-900">{t.position}</div>
              <div className="text-md md:text-xl text-blue-900">{t.name}</div>
              <div className="font-medium underline">{t.contact}</div>
            </div>
          </motion.div>
        ))}


      </div>
    </>
  )
}

export default About

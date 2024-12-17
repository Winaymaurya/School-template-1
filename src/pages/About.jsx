import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import { motion, useInView } from 'framer-motion';
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
  return (
    <>
      <Navbar />
      <motion.div className='flex flex-col justify-center items-center -z-10  h-[50vh]'
        variants={rise}
        initial="initial"
        animate="animate">
        <div className="text-[70px] font-normal text-center mt-6"
        > OUR SCHOOL
        </div>
        <div className="text-[20px] font-extralight text-center mt-2  w-[50%]"
        > I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </div>

      </motion.div>


      {/* PRincipal */}
      <div className="h-[75vh] bg-gray-200 mt-10 flex items-center justify-center">
        <div className="w-[40%] h-[75vh]">
          <img
            src="https://img.freepik.com/free-photo/smiling-business-man-sitting-empty-office-desk_1262-5631.jpg?t=st=1734153319~exp=1734156919~hmac=33fb2b74fc5aad587b40a73f319950fbe5c1207ce8f0e3c5c11d53dd7e592673&w=360"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[40%] h-[75vh] bg-gray-800 px-10 flex flex-col justify-center">
          <div className="text-[40px] tracking-wide text-blue-300 mb-12">
            Principal's Message
          </div>
          <motion.div
            ref={principalRef}
            className="text-white text-lg tracking-wide font-light flex justify-between flex-col h-[40vh]"
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
      </div>

      {/* Manager's Message */}
      <div className="h-[75vh] bg-gray-200 flex flex-row-reverse items-center justify-center">
        <div className="w-[40%] h-[75vh]">
          <img
            src="https://img.freepik.com/free-photo/smiling-business-man-sitting-empty-office-desk_1262-5631.jpg?t=st=1734153319~exp=1734156919~hmac=33fb2b74fc5aad587b40a73f319950fbe5c1207ce8f0e3c5c11d53dd7e592673&w=360"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[40%] h-[75vh] bg-gray-800 px-10 flex flex-col justify-center">
          <div className="text-[40px] tracking-wide text-blue-300 mb-12">
            Manager's Message
          </div>
          <motion.div
            ref={managerRef}
            className="text-white text-lg tracking-wide font-light flex justify-between flex-col h-[40vh]"
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
      </div>

      {/* Founder */}
      <div className="h-[75vh] bg-gray-200  flex items-center justify-center">
        <div className="w-[40%] h-[75vh]">
          <img
            src="https://img.freepik.com/free-photo/smiling-business-man-sitting-empty-office-desk_1262-5631.jpg?t=st=1734153319~exp=1734156919~hmac=33fb2b74fc5aad587b40a73f319950fbe5c1207ce8f0e3c5c11d53dd7e592673&w=360"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[40%] h-[75vh] bg-gray-800 px-10 flex flex-col justify-center">
          <div className="text-[40px] tracking-wide text-blue-300 mb-12">
            Founder's Message
          </div>
          <motion.div

            className="text-white text-lg tracking-wide font-light flex justify-between flex-col h-[40vh]"
            variants={rise}
            initial="initial"
            animate="animate"
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
      </div>




      <motion.div className='flex flex-col justify-center items-center -z-10  h-[50vh]'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4,once:true, type: "tween", delay: 0.6 }}>
        <div className="text-[70px] font-normal text-center mt-6"
        > STAFF DIRECTORY
        </div>
        <div className="text-[20px] font-extralight text-center mt-2  w-[50%]"
        > I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </div>

      </motion.div>


      <div className=" flex justify-evenly flex-wrap">

        {teacher.map((t, index) => (
          <motion.div className="w-[20%] mx-10 my-4 cursor-pointer" key={index}
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.3,once:true,type:'tween',delay:index*.2}}
          whileHover={{scale:0.96,opacity:0.95}}>
            <div className="h-60">
              <img
                src={t.img}
                className="h-full w-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="font-semibold font-montserrat">
              <div className="text-blue-900">{t.position}</div>
              <div className="text-xl text-blue-900">{t.name}</div>
              <div className="font-medium underline">{t.contact}</div>
            </div>
          </motion.div>
        ))}


      </div>
    </>
  )
}

export default About

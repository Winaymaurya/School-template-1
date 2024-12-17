import React from 'react'
import Navbar from '../components/Navbar'
import { motion ,useInView} from 'framer-motion';
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF ,FaLinkedinIn , FaInstagram } from "react-icons/fa";

const Contact = () => {
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
    const rise2 = {
      initial: { opacity: 0, y: 60 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.9, delay: 0.3 },
      },
    };
  
    const ref = React.useRef(null);
    const isInView = useInView(ref,{amount:0.5});

  return (
    
    <>
    <Navbar/>
    <motion.div className='flex flex-col justify-center items-center -z-10  h-[50vh]'
                variants={rise}
                initial="initial"
                animate="animate">
                <div className="text-[70px] uppercase font-normal text-center mt-6"
                > Contact Us
                </div>
                <div className="text-[20px] font-extralight text-center mt-2  w-[50%]"
                > I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </div>

            </motion.div>

            <div className="h-[86vh] -z-10  bg-red-100 bg-cover bg-top flex items-center "
       style={{
        backgroundImage:
          "url('https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/5940/20-SM150261.jpg')",
        backgroundAttachment: "fixed", // Parallax background effect
      }}>
        <div className="bg-[#3a1696] text-white w-full h-[50vh] mx-10 p-4">
           <div className="text-[40px] tracking-wider uppercase">Visit the School-</div>
           <motion.div className=" flex justify-evenly h-[35vh] items-center "
           initial={{opacity:0,y:50}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:0.8,type:"tween",delay:0.8}}>
           <div className=" ">
            <div className="uppercase tracking-wider text-2xl mb-4">Address </div>
            <div className="m-2 space-y-2">
              <div>500 Terry Francine Street</div>
              <div>San Francisco, CA 94158</div>
            </div>
           </div>
           <div className=" ">
            <div className="uppercase tracking-wider text-2xl mb-4">Office hours </div>
            <div className="m-2 space-y-2">
              <div>Summer : 8:00 AM - 2:00 PM</div>
              <div>Winter : 9:00 AM - 3:00 PM</div>

            </div>
           </div>
           </motion.div>
        </div>
      </div>

     


      <div className=" mt-20 grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">
  <motion.div 
  ref={ref}
  variants={rise2}
  initial="initial"
  animate={isInView ? "animate" : "initial"}>
    <h1 className="text-gray-800 text-3xl tracking-wide uppercase"
    >Let's Talk</h1>
    <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
    <div className="mt-4">
      <h2 className="text-gray-800  font-montserrat font-semibold">Email</h2>
      <ul className="mt-4">
        <li className="flex items-center">
          <div className="bg-[#e6e6e6cf]  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
          <CiMail size={24} className='text-blue-700'/>
          </div>
          <a href="javascript:void(0)" className="text-[#007bff] text-sm ml-4">
            <div>info@example.com</div>
          </a>
        </li>
      </ul>
    </div>
    <div className="mt-4">
      <h2 className="text-gray-800 font-montserrat font-semibold">Phone</h2>
      <ul className="mt-4">
        <li className="flex items-center">
          <div className="bg-[#e6e6e6cf]  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
          <IoCallOutline size={20} className='text-blue-700'/>
          </div>
          <a href="javascript:void(0)" className="text-[#007bff] text-sm ml-4">
            <div>12398625987</div>
          </a>
        </li>
      </ul>
    </div>
 
    <div className="mt-2">
      <h2 className="text-gray-800  font-montserrat font-semibold">Socials</h2>
      <ul className="flex mt-4 space-x-4">
        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center ">
          <FaFacebookF className='text-blue-600 hover:scale-110' size={20}/>
        </li>
        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center ">
          <FaLinkedinIn className='text-blue-600 hover:scale-110' size={20}/>
        </li>
        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center ">
          <FaInstagram  className='text-red-600 hover:scale-110' size={24}/>
        </li>
      </ul>
    </div>
  </motion.div>
  <motion.form className="ml-auto space-y-4"
  ref={ref}
  variants={rise2}
  initial="initial"
  animate={isInView ? "animate" : "initial"}>
    <input type="text" placeholder="Name" className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
    <input type="email" placeholder="Email" className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
    <input type="text" placeholder="Subject" className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
    <textarea placeholder="Message" rows={6} className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent" defaultValue={""} />
    <button type="button" className="text-white bg-[#5f36c6] hover:bg-[#4c25ae] rounded-md text-sm px-4 py-3 w-full !mt-6 uppercase tracking-wider">Send</button>
  </motion.form>
</div>

    </>
  )
}

export default Contact

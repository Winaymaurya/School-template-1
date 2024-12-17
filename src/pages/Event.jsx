import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion';

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Event = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = (index) => {
      setExpanded(expanded === index ? false : index); // Toggle accordion
    };
    const events = [
        {
            date: '16 Dec 2024',
            title: 'Columbus Day',
            details: 'loremhdfghyg fdjg dfgh fgfjgb ofghgo sdf fhhgdfjh hdhfhnk '
        },
        {
            date: '19 Dec 2024',
            title: 'Thanksgiving',
            details: 'loremhdfghyg fdjg dfgh fgfjgb ofghgo sdf fhhgdfjh hdhfhn    k '
        },
        {
            date: '25 Dec 2024',
            title: 'Christmas',
            details: 'loremhdfghyg fdjg dfgh fgfjgb ofghgo sdf fhhgdfjh hdhfhnk '
        },
    ]

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

            <motion.div className='flex flex-col justify-center items-center -z-10  h-[50vh]'
                variants={rise}
                initial="initial"
                animate="animate">
                <div className="text-[70px] uppercase font-normal text-center mt-6"
                > School Events
                </div>
                <div className="text-[20px] font-extralight text-center mt-2  w-[50%]"
                > I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </div>

            </motion.div>

            <div className="mx-32 mb-10">
            {events.map((c, index) => (
        <Accordion
          key={index}
          expanded={expanded === index} // Only expand the current item
          className="mb-6 bg-[#471cb3] text-white "
          sx={{ backgroundColor: "#471cb3", color: "white" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" ,  fontSize: "3rem"}} />}
            onClick={() => handleToggle(index)} // Handle toggling
          >
            <div className="flex justify-between w-full items-center">
              <div>
                <div className="text-xl">{c.date}</div>
                <div className="text-[45px] tracking-wide font-montserrat">
                  {c.title}
                </div>
              </div>
         
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="">{c.details}</div>
          </AccordionDetails>
        </Accordion>
      ))}


            </div>
           
        </>
    )
}

export default Event

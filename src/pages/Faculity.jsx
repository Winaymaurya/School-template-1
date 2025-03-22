import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import DynamicHelmet from '../components/DynamicHelmet';

const Faculity = () => {
  // Create refs for each facility section
  const transportRef = useRef(null);
  const cctvRef = useRef(null);
  const cameraRef = useRef(null);
  const otherRef = useRef(null);

  // State for active tab
  const [activeTab, setActiveTab] = useState("transport");

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const rise = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1, 
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <DynamicHelmet/>
      <div className="relative">
        {/* Background Section */}
        <div
          className="h-[60vh] bg-cover bg-center flex items-start"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?t=st=1734096708~exp=1734100308~hmac=4f03e9d49649b9285ad8670fa6604a70a6ebf60b402f48abcd9b3aafcc6d3a24&w=996')",
            backgroundAttachment: "fixed", // For parallax effect
          }}
        >
          <motion.div
            className="flex flex-col justify-center items-center z-10 md:h-[40vh]"
            variants={rise}
            initial="initial"
            animate="animate"
          >
            <div className="text-[50px] md:text-[70px] font-normal text-center mt-6 uppercase">
              Facelities
            </div>
            <div className="text-[15px] md:text-[20px] font-extralight text-center mt-2 w-[90%] md:w-[50%]">
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </div>
          </motion.div>
        </div>

        {/* SVG Wave */}
        <svg
          className="absolute -bottom-5 left-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L30,213.3C60,203,120,181,180,181.3C240,181,300,203,360,202.7C420,203,480,181,540,181.3C600,181,660,203,720,202.7C780,203,840,181,900,181.3C960,181,1020,203,1080,213.3C1140,224,1200,224,1260,213.3C1320,203,1380,181,1410,170.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Facilities Tabs */}
      <div className=" py-4 sticky top-[110px] z-10  font-montserrat">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          <button
            className={`px-4 py-2 rounded transition ${
              activeTab === "transport"
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => {
              setActiveTab("transport");
              scrollToSection(transportRef);
            }}
          >
            Transport
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeTab === "cctv"
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => {
              setActiveTab("cctv");
              scrollToSection(cctvRef);
            }}
          >
            CCTV
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeTab === "camera"
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => {
              setActiveTab("camera");
              scrollToSection(cameraRef);
            }}
          >
            Camera
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeTab === "other"
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => {
              setActiveTab("other");
              scrollToSection(otherRef);
            }}
          >
            Other Facility
          </button>
        </div>
      </div>

      {/* Facility Sections */}
      <div className="container mx-auto px-4 py-10 space-y-20">
        <section ref={transportRef} className="min-h-[100vh] pt-52">
          <h2 className="text-3xl font-bold mb-4">Transport</h2>
          <p>
            Our state-of-the-art transport facility ensures a safe, comfortable, and efficient travel experience. We offer a fleet of modern vehicles and professional drivers.
          </p>
        </section>

        <section ref={cctvRef} className="min-h-[100vh] pt-52">
          <h2 className="text-3xl font-bold mb-4">CCTV</h2>
          <p>
            We prioritize safety and security with our advanced CCTV system covering all critical areas. Monitor your surroundings 24/7 with our reliable network.
          </p>
        </section>

        <section ref={cameraRef} className="min-h-[100vh] pt-52">
          <h2 className="text-3xl font-bold mb-4">Camera</h2>
          <p>
            Capture every moment with our high-resolution cameras installed across the campus, ensuring every event is recorded with clarity.
          </p>
        </section>

        <section ref={otherRef} className="min-h-[100vh] pt-52">
          <h2 className="text-3xl font-bold mb-4">Other Facility</h2>
          <p>
            In addition to the above, we offer a range of other facilities designed to enhance your experience. From recreational areas to high-speed internet zones, we have it all.
          </p>
        </section>
      </div>
    </>
  );
};

export default Faculity;

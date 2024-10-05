import React from 'react'
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>

 <div className="flex justify-around h-[100vh] md:h-[90vh] items-center md:px-10 ">

<div className="hidden md:block relative h-[70%] overflow-hidden w-[38%] rounded-lg  "
  data-aos="fade-down-right"
  data-aos-duration="800">
 <img src="https://img.freepik.com/free-vector/book-your-date-mobile-phone_23-2148552969.jpg?t=st=1728125286~exp=1728128886~hmac=2bd30d506bc7a6b715713b24c1f5a24287d4ea2b97b3cf5b860edb2daf16cccc&w=740" alt="" />
</div>
<div className="w-[90%] md:w-[50%] p-1 h-[90%] md:h-[360px] flex flex-col justify-between font-montserrat"
  data-aos="fade-up-left"
  data-aos-duration="800">
  <div className=" text-[20px]  ">Welcome to ,</div>
  <div className=" text-[45px]  ml-6 text-blue-900">Tickete</div>
  <div className=" text-[25px]  "> Where you can Book &nbsp;
    <span className="text-blue-800">
        <ReactTyped
        strings={["Event Tickets", "Concert Tickets", "and many more.."]}
        typeSpeed={60}
        loop
        backSpeed={40}
        showCursor={true}
      /></span>
  </div>

  <div className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias sequi possimus ea reiciendis voluptas corporis neque ipsa in quam, enim iusto sed est repellendus incidunt et praesentium sit odio alias officia perspiciatis </div>
  <button
    className="w-40 font-montserrat tracking-wider font-bold text-center uppercase  text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85]"
    type="button">
    Learn More
  </button>
</div>

</div>

    </>
  )
}

export default Home

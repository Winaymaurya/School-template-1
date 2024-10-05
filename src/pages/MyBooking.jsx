import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { baseURL } from '../utils/baseURL';

const MyBooking = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  const handelLogout = () => {
    alert("Logging You Out")
    localStorage.clear();
    window.location.reload();
  }
  
  const getBooking = async () => {
    setLoading(true)
    try {
      const userId = localStorage.getItem('id');
      console.log(userId)
      const { data } = await axios.get(baseURL+`ticket/book/` + userId);
      setTickets(data?.data);
      console.log(data?.data);

      setLoading(false)

    } catch (error) {
      console.error("Error fetching schools:", error);
    }
  };

  useEffect(() => {
    getBooking()
  }, [])
  return (
    <>
     <div className='absolute right-0 m-2'>
      <Link to={'/'}>
        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handelLogout}>Logout</button>
      </Link>
    </div>
      {!loading ?
        <div className="min-h-[70vh] ">

          <div className='text-3xl text-center p-2 mb-8 m-2 font-montserrat'>Booked Tickets</div>

          <div className=" flex justify-around flex-wrap ">
            {tickets.map((s, id) => (
              <div className="w-80 p-4 m-2 font-montserrat rounded-lg shadow border-2 border-gray-600  bg-gray-100" key={id}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{s.ticket.name}</h5>
                <div className="mb-2 text-md text-gray-700 font-semibold">Address: {s.ticket.location}</div>
                <div className="mb-2 text-md text-gray-700 font-semibold">Price: {s.ticket.price}</div>
  
                <div className="mb-2 text-md text-gray-700 font-semibold"> Date: {s.ticket.date.split('T')[0]}</div>
                <div className="mb-2 text-md text-gray-700 f"> {s?.ticket.description}</div>

              </div>
            ))}

          </div>



        </div>
        :
        <div className="m-15 text-3xl  h-[60vh] flex justify-center items-center">
        <CircularProgress size={50}/>
        </div>
      }
    </>
  )
}

export default MyBooking

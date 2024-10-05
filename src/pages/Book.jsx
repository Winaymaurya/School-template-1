import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { baseURL } from '../utils/baseURL';

const Book = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const getTickets = async () => {
    setLoading(true)
    try {
      console.log(baseURL)
      const { data } = await axios.get(baseURL+"ticket");
      setTickets(data?.tickets );
      console.log(data?.tickets );
      setLoading(false)

    } catch (error) {
      console.error("Error fetching schools:", error);
    }
  };

  const handleBook= async(id)=>{
  try {
    const userId = localStorage.getItem('id');
    console.log(id,"hi")
    const {data}=await axios.post(`http://localhost:8080/api/v1/ticket/book/${id}`,{userId})
    if(data?.success){
      alert(data?.message)
    }
    else{
      alert(data?.message)

    }
  } catch (error) {
    console.log(error)
  }
  }

  useEffect(() => {
    getTickets();
   
  }, []);
  return (
    <>
    {!loading ? 
      <div className="min-h-[70vh] ">

        <div className='text-3xl text-center p-2 mb-8 m-2 font-montserrat'>Register for quiz of your school</div>

        <div className=" flex justify-around flex-wrap ">
          {tickets.map((s, id) => (
            <div className="w-80 p-4 m-2 font-montserrat rounded-lg shadow border-2 border-gray-600  bg-gray-100" key={id}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{s.name}</h5>
              <div className="mb-2 text-md text-gray-700 font-semibold">Address: {s.location}</div>
              <div className="mb-2 text-md text-gray-700 font-semibold">Price: {s.price}</div>
              <div className="mb-2 text-md text-gray-700 font-semibold"> Date: {s.date.split("T")[0]}</div>
              <div className="mb-2 text-md text-gray-700 "> {s?.description}</div>

              <button
                className={`w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg 

                 focus:outline-none tracking-widest`}
                onClick={() => handleBook( s._id)}
              
              >
                Book
              </button>

            </div>
          ))}

        </div>

        

      </div>
      :
      <div className="m-15 text-3xl h-[60vh] flex justify-center items-center">
      <CircularProgress size={50} />
    </div>
    }
    </>
  )
}

export default Book

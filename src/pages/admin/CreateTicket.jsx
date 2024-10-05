import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { baseURL } from '../../utils/baseURL';
const CreateTicket = () => {
  const [editId, setEditId] = useState('')
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [description, setDescription] = useState('')
  const [tickets, setTickets] = useState([])
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handelCreate = async () => {
    try {
      const payload = { name, price, location, date: eventDate, description }
      const { data } = await axios.post( baseURL+'ticket ', payload)
      if (data?.success) {
        alert(data?.message)
        handelClear()
        handleClose()
        getTickets()
      }
      else {
        alert(data?.message)

      }
    } catch (error) {
      console.log(error)
    }
  }
  const getTickets = async () => {

    try {
      const { data } = await axios.get( baseURL+"ticket");
      setTickets(data?.tickets);
      console.log(data?.tickets);

    } catch (error) {
      console.error("Error fetching schools:", error);
    }
  };
  const handelEdit=async(id)=>{
   
  try {
    const {data}=await axios.get(baseURL+`ticket/${id}`)
    setEditId(id)
    setName(data.ticket.name)
    setDescription(data.ticket.description)
    setPrice(data.ticket.price)
    setLocation(data.ticket.location)
    setEventDate(data.ticket.date)
    handleOpen()

  } catch (error) {
    console.log(error)
  }
  }
  const handelUpdate=async()=>{
   try {
    
    const {data}=await axios.put(baseURL+`ticket/${editId}`,{name,description,price,location,date:eventDate})
    if(data?.success){
      alert(data?.message)
    }
    else{
      alert(data?.message)

    } 
    handelClear()
    handleClose()
    getTickets()
    setEditId('')
   } catch (error) {
    console.log(error)
   }
  }
  const handelDelete = async (id) => {
    try {
      const { data } = await axios.delete(baseURL+`ticket/${id}`)
      if (data?.success) {
        alert(data?.message)
      }
      else {
        alert(data?.message)
      }
      getTickets()
    } catch (error) {
      console.log(error)

    }
  }
  const handelClear = () => {
    setName('')
    setDescription('')
    setPrice('')
    setLocation('')
    setEventDate('')
  }
  useEffect(() => {
    getTickets()
  }, [])
  return (
    <>

      <div className="text-3xl font-montserrat text-center mt-4 ">Create Tickets</div>
      <div className="flex justify-end">
        <button className='text-lg font-montserrat border-2 border-blue-600 p-1 mx-4 mb-4 text-blue-700 rounded-lg' onClick={handleOpen}>
          Create New Ticket
        </button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className=" flex flex-wrap justify-center items-center flex-col border-gray-500 border-2 rounded-xl w-[80%] md:w-[40%] space-y-2 p-6 bg-white absolute top-[20%] left-[30%] ">
          <div className=" w-[100%] ">
            <label className="block  text-sm font-medium text-gray-600 mx-1 "> Name *</label>
            <input type="text" name="" placeholder='Full Name' className='focus:outline-none border-2 rounded-lg  border-gray-500  text-sm  p-1 w-full  ' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="w-[100%] ">
            <label className="block  text-sm font-medium text-gray-600 mx-1 ">Ticket Price*</label>
            <input type="text" name="" placeholder='price' className='focus:outline-none border-2 rounded-lg  border-gray-500  text-sm  p-1 w-[100%]  ' value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="w-[100%] ">
            <label className="block  text-sm font-medium text-gray-600 mx-1 ">Location *</label>
            <input type="text" name="" placeholder='Location' className='focus:outline-none border-2 rounded-lg  border-gray-500  text-sm  p-1 w-[100%] ' value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className="w-[100%] ">
            <label className="block  text-sm font-medium text-gray-600 mx-1 ">Event Date * </label>
            <input type="date" name="" placeholder='Phone' className='focus:outline-none border-2 rounded-lg  border-gray-500  text-sm  p-1 w-[100%] '
              value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
          </div>

          <div className="w-[100%] ">
            <label className="block  text-sm font-medium text-gray-600 mx-1 ">Description </label>
            <textarea name="" id="" rows="4" className='focus:outline-none border-2 rounded-lg  border-gray-500  text-sm  p-1 w-[100%] ' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <button
            className="w-full font-montserrat tracking-wider font-bold text-center uppercase  text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85]"
            type="button" onClick={ editId? handelUpdate:  handelCreate}>
           {editId?'Update Ticket' : 'Create Ticket'} 
          </button>
        </div>
      </Modal>

      <div className=" flex justify-around flex-wrap ">
        {tickets.map((s, id) => (
          <div className="w-80 p-4 m-2  font-montserrat rounded-lg shadow border-2 border-gray-600  bg-gray-100" key={id}>
            <div className="flex justify-between items-center"> <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{s.name}</h5> <div className="flex">
              <MdOutlineEdit size={20} onClick={()=> handelEdit(s._id)} /> 
              
              <MdOutlineDeleteOutline size={20} onClick={() => handelDelete(s._id)} /> </div></div>
            <div className="mb-2 text-md text-gray-900 font-semibold"> Address: {s.location}</div>
            <div className="mb-2 text-md text-gray-700 font-semibold">Price: {s.price}</div>
            <div className="mb-2 text-md text-gray-700 font-semibold"> Date: {s.date.split("T")[0]}</div>
            <div className="mb-2 text-md text-gray-700 font-semibold"> {s?.description}</div>

          </div>
        ))}

      </div>
    </>
  )
}

export default CreateTicket


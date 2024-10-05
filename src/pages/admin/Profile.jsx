import React from 'react'
import { Link } from 'react-router-dom'
const Profile = () => {

  const handelLogout = () => {
    alert("Logging You Out")
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className='m-2'>
      <Link to={'/'}>
        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handelLogout}>Logout</button>
      </Link>
    </div>
  )
}

export default Profile

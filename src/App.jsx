import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import LoginProtectedWrapper from './utils/protectedRoutes'

import Profile from './pages/admin/Profile'
import Navbar from './components/Navbar'
import AdminNavbar from './components/AdminNavbar'
import Book from './pages/Book'
import MyBooking from './pages/MyBooking'
import CreateTicket from './pages/admin/CreateTicket'
import LoginUnProtectedWrapper from './utils/unProtectedRoutes'
import Register from './pages/Register'

// import PageNotFound from './pages/PageNotFound'
function App() {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const NavBarSelector = () => {
    if (token && role === 'admin') {
      return <AdminNavbar />;
    } else if (token && role === 'user') {
      return <Navbar />;
    } else {
      return null;
    }
  };

  return (
    <>
    <NavBarSelector/>
  
    <Routes>
 
      <Route path={'/'} element={
      <LoginUnProtectedWrapper>
        <Login/>
      </LoginUnProtectedWrapper>
      }/>
      <Route path={'/register'} element={
      <LoginUnProtectedWrapper>
        <Register/>
      </LoginUnProtectedWrapper>
      }/>



      {/* <Route path={'/*'} element={<PageNotFound/>}/> */}

      {/* Protected */}
      <Route path={'/home'} element={
        <LoginProtectedWrapper>
          <Home/>
        </LoginProtectedWrapper>
      }/>
      <Route path={'/book'} element={
        <LoginProtectedWrapper>
          <Book/>
        </LoginProtectedWrapper>
      }/>
      <Route path={'/myBooking'} element={
        <LoginProtectedWrapper>
          <MyBooking/>
        </LoginProtectedWrapper>
      }/>
      <Route path={'/create'} element={
        <LoginProtectedWrapper>
          <CreateTicket/>
        </LoginProtectedWrapper>
      }/> 
      <Route path={'/profile'} element={
        <LoginProtectedWrapper>
          <Profile/>
        </LoginProtectedWrapper>
      }/>
    </Routes>
    </>
  )
}

export default App

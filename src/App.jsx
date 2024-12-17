import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'


import Home from './pages/Home'
import About from './pages/About'
import Admission from './pages/Admission'
import Contact from './pages/Contact'
import News from './pages/News'
import Academics from './pages/Academics'
import Student from './pages/Student'
import Event from './pages/Event'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'
// import PageNotFound from './pages/PageNotFound'
function App() {
 

  return (
    <>

    <Routes>

        <Route path={'/'} element={
          <Home/>
          }/>
        <Route path={'/About'} element={
          <About/>
          }/>
        <Route path={'/Admission'} element={
          <Admission/>
          }/>
        <Route path={'/Contact'} element={
          <Contact/>
          }/>
        <Route path={'/Student'} element={
          <Student/>
          }/>
        <Route path={'/Events'} element={
          <Event/>
          }/>
        <Route path={'/Gallery'} element={
          <Gallery/>
          }/>
        <Route path={'/Academics'} element={
          <Academics/>
          }/>
     
    </Routes>
    <Footer/>
    </>
  )
}

export default App

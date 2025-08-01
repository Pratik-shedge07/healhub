import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctores' 
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyAppointments from './pages/MyAppointments'
import Myprofile from './pages/Myprofile'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/docters' element={<Doctors />} />
            <Route path='/docters/:speciality' element={<Doctors />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/my-profile' element={<Myprofile />} />
            <Route path='/my-appointments' element={<MyAppointments />} />
            <Route path='/my-profile' element={<Myprofile />} />
            <Route path='/appointment/:docId' element={<Appointments />} />
            


      </Routes>
    </div>
  )
}

export default App

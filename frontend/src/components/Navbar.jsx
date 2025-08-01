import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400'>
      <img className='w-44 cursor-pointer'  src={assets.logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outlone-none h-0.5 bg-primary w-3/5 m-auto' />
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outlone-none h-0.5 bg-primary w-3/5 m-auto'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className='border-none outlone-none h-0.5 bg-primary w-3/5 m-auto'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>Contact</li>
            <hr className='border-none outlone-none h-0.5 bg-primary w-3/5 m-auto'/>
        </NavLink>
      </ul>
      <div>
        <button className='bg-primary text-white'>Create Account</button>
      </div>
    </div>
  )
}

export default Navbar

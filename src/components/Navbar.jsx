import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/" className="w-15 h-10 rounded-xl bg-white items-center justify-center flex font-bold shadow-xl">
        <p className='blue-gradient_text'>HANZ</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to="/about" className={({isActive}) => isActive?"text-blue-500":"text-black"}>
            About
        </NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive?"text-blue-500":"text-black"}>
            Projects
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar

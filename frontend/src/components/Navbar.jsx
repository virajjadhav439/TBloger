import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
    <h2 className='logo'>TBloger</h2>

    <ul className='navbar-options'>
        <li className='navbar-home'>
        <Link to="/">Home</Link>
        </li>

        <li className='navbar-login'>
            <Link to="/login">Login</Link>
        </li>

        <li className='navbar-signup'>
            <Link to="/signup">Signup</Link>
        </li>
    </ul>

    </nav>
    </>
  )
}

export default Navbar
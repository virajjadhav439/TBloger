import React from 'react'
import { Link } from 'react-router-dom'

import '../css/Footer.css'

const Footer = () => {
  return (

    <footer className='footer'>

      <h2 className='footer-logo'>
        TBloger
      </h2>

      <p className='footer-description'>
        Express your thoughts beautifully with modern blogging experiences.
      </p>

      <ul className='footer-links'>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/signup">Signup</Link>
        </li>

      </ul>

      <p className='footer-copyright'>
        © 2026 TBloger. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer
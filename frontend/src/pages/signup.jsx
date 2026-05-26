import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Auth.css";

const Signup = () => {
  return (
    <div className='auth-page'>
      <div className='auth-container'>
        <h1 className='auth-heading'>Create Account</h1>
        <p className='auth-subheading'>Express Your Thoughts Beautifully</p>
        <form action="" className='auth-form'>
          <input type="text" placeholder='Full Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password'/>
          <input type="password" placeholder='Confirm Password' />
          <button className='auth-button'>Sign Up</button>
        </form>

        <p className='auth-switch'>
          Already have an account?
          <Link to='/login'>
          Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
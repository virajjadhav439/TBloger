import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div className='auth-page'>
      <div className='auth-container'>
        <h1 className='auth-heading'>Welcome Back</h1>
        <p className='auth-subheading'>Login to Continue Bloggin Journey with TBlogger.</p>
        <form action="" className='auth-form'>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <button className='auth-button'>Login</button>
        </form>
        <p className='auth-switch'>Don't have a account?
          <Link to='/signup'>Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default login
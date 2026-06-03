  import React, { useState } from 'react'
  import { Link } from 'react-router-dom'
  import API from '../api/api'
  import { useNavigate } from 'react-router-dom'

  const login = () => {
    const [formData,setFormData] =useState({
      email:'',password:'',
    })

    const handleChange=(e)=>{
      setFormData({
        ...formData,[e.target.name]:e.target.value
      })
    }
    const navigate = useNavigate()
    const handleSubmit=async(e)=>{
      //Prevent Internal Build in Default Behiaviour of browser
      e.preventDefault()
      try {
        //Send Post Request for login 
        const response = await API.post('/auth/login',{
          email:formData.email,
          password:formData.password,
        })

        //Save The JWT token 
          localStorage.setItem("token",response.data.token)
  
        //Login Successful confirmation message
        alert('Account Login Successfully')
        console.log(localStorage.getItem("token"));

        
      } catch (error) {
        alert(error.response?.data?.message || 'Login Failed')
      }
    }
    return (
      <div className='auth-page'>
        <div className='auth-container'>
          <h1 className='auth-heading'>Welcome Back</h1>
          <p className='auth-subheading'>Login to Continue Bloggin Journey with TBlogger.</p>
          <form action="" className='auth-form' onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder='Email Address' onChange={handleChange} />
            <input type="password" name='password' placeholder='Password' onChange={handleChange}/>
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
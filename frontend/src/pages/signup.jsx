import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/Auth.css";
import API from '../api/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData,setFormData]=useState({
      name:'',email:'',password:'',confirmPassword:''
    })

    const handleChange = (e)=>{
      //Set Form Data
      setFormData({
        ...formData,[e.target.name]:e.target.value
      })
    }
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
      //Prevent any build in behaiviour
    e.preventDefault();
      //Check if Both the Passwords are equal/same
    if(formData.password !== formData.confirmPassword){
        alert("Passwords do not match");
        return;
    }

    try{
      //Send Post- for signup request to Backend Express via Axios - frontend location , axios - car/transport ,backend - location , express - receiver and sender
        const response = await API.post('/auth/signup',{
            name: formData.name,
            email: formData.email,
            password: formData.password
        });

        //Confirmation Message of Account Creation
        alert("Account Created Successfully");
        navigate('/login');

    }catch(error){
        alert(error.response?.data?.message || "Signup Failed");
    }
}

  return (
    <div className='auth-page'>
      <div className='auth-container'>
        <h1 className='auth-heading'>Create Account</h1>
        <p className='auth-subheading'>Express Your Thoughts Beautifully</p>
        <form onSubmit={handleSubmit} className='auth-form'>
          <input type="text" name='name' placeholder='Full Name' onChange={handleChange}/>
          <input type="email" name='email' placeholder='Email Address' onChange={handleChange}/>
          <input type="password" name='password' placeholder='Password' onChange={handleChange}/>
          <input type="password" name='confirmPassword' placeholder='Confirm Password' onChange={handleChange}/>
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
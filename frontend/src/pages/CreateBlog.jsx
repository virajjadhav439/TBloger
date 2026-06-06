import React from 'react'
import "../css/CreatePost.css";
import Navbar from '../components/Navbar';
import { useState } from 'react';
import API from '../api/api';
import { useNavigate } from 'react-router-dom';
const CreateBlog = () => {
  const navigate = useNavigate()
  const [formData,setFormData]=useState({
    title:'',category:'',content:'',image:'',
  })
  const handleChange = (e)=>{
    setFormData({
      ...formData,[e.target.name]:e.target.value
    })
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()
    try {
      // Send Post Request for Creation of Blog
      const token = localStorage.getItem("token")

const response = await API.post("/blogs/create",{
    title: formData.title,
    category: formData.category,
    content: formData.content,
    image:formData.image,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
)
      alert('Blog Created Successfully')
      navigate('/blogs')
    } catch (error) {
      alert(error.response?.data?.message || 'Blog Creation Failed')
    }
  }
  return (<>
  <Navbar/>
    <div className='create-post-page'>
      <div className='create-post-container'>
      <h1 className='create-post-heading'>Create New Blog</h1>
      <p className='create-post-subheading'>Share your thoughts and ideas with the world.</p>
      <form onSubmit={handleSubmit} className='create-post-form'>
        <input type="text" placeholder='Blog Title' name='title' onChange={handleChange}/>
        <input type="text" placeholder='Category' name='category' onChange={handleChange}/>
        <textarea placeholder='Write your blog Content here...' rows="10" name='content'onChange={handleChange}>
        </textarea>
        <input type="text"placeholder='Image URL' name='image'onChange={handleChange}/>
        <button className='create-post-button'>
          Publish Blog
        </button>
      </form>
      </div>
    </div>
  </>
  )
}

export default CreateBlog
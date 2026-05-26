import React from 'react'
import "../css/CreatePost.css";
import Navbar from '../components/navbar';

const CreatePost = () => {
  return (<>
    <div className='create-post-page'>
      <div className='create-post-container'>
      <h1 className='create-post-heading'>Create New Blog</h1>
      <p className='create-post-subheading'>Share your thoughts and ideas with the world.</p>
      <form action="" className='create-post-form'>
        <input type="text" placeholder='Blog Title' />
        <input type="text" placeholder='Category' />
        <textarea placeholder='Write your blog Content here...' rows="10">
        </textarea>
        <input type="file" />
        <button className='create-post-button'>
          Publish Blog
        </button>
      </form>
      </div>
    </div>
  </>
  )
}

export default CreatePost
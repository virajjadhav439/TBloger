import React, { useEffect, useState } from 'react'
import API from '../api/api'
import BlogCard from '../components/BlogCard'
import '../css/BlogCard.css'

const BlogPage = () => {
    const [blogs,setBlogs]=useState([])

    useEffect(() => {

        const fetchBlogs = async () => {
            try {
                const response = await API.get('/blogs')
                
                setBlogs(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchBlogs()
    }, [])


    return (
        <>
        <div>
            <h1 className='BlogPage-heading'>All Blogs</h1>
            {blogs.map((blog)=>(
                <div key={blog._id} className='blog-container'>
                    <BlogCard key={blog._id} blog={blog}/>
                </div>
            ))}
        </div>
        </>
    )
}

export default BlogPage
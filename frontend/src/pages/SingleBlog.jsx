import React, { useEffect, useState } from 'react'
import API from '../api/api'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ReactMarkdown from 'react-markdown'
import '../css/SingleBlog.css'
const SingleBlog = () => {

    const { id } = useParams()

    const [blog, setBlog] = useState(null)

    useEffect(() => {

        const fetchBlog = async () => {

            try {

                const response = await API.get(`/blogs/${id}`)

                setBlog(response.data)

            } catch (error) {

                console.log(error)

            }

        }

        fetchBlog()

    }, [id])

    if (!blog) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <Navbar />

<div className="single-blog-page">

    <div className="single-blog-container">

        <img
            src={blog.image}
            alt={blog.title}
            className="single-blog-image"
        />

        <h3 className="single-blog-category">
            {blog.category}
        </h3>

        <h1 className="single-blog-title">
            {blog.title}
        </h1>

        <div className="single-blog-content">
            <ReactMarkdown>
                {blog.content}
            </ReactMarkdown>
        </div>

    </div>

</div>
        </>
    )
}

export default SingleBlog
import React, { useEffect, useState } from 'react'
import API from '../api/api'
import { useParams } from 'react-router-dom'

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
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
        </>
    )
}

export default SingleBlog
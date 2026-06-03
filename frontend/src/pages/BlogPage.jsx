import React, { useEffect } from 'react'
import API from '../api/api'

const BlogPage = () => {

    useEffect(() => {

        const fetchBlogs = async () => {
            try {

                const response = await API.get('/blogs')
                console.log(response)
                console.log(response.data)

            } catch (error) {

                console.log(error)

            }
        }

        fetchBlogs()

    }, [])

    return (
        <div>BlogPage</div>
    )
}

export default BlogPage
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Home.css";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import API from "../api/api";
const Home = () => {
  const [blogs,setBlogs] = useState([])
  
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
      <Navbar />
      <section className="hero-section">
        <h1 className="hero-heading">Express Your Thoughts Beautifully</h1>

        <p className="hero-description">
          A modern glassmorphism blogging platform with immersive themes.
        </p>

        <Link to="/signup">

  <button className='hero-action-button'>
    Start Blogging
  </button>

</Link>
      </section>

      <section className="featured-section">
        <h1 className="featured-heading">Featured Blogs</h1>
        <div className="blog-container">
          {blogs.slice(0,3).map((blog)=>(
            <BlogCard key={blog._id} blog={blog}/>
))}
        </div>
      </section>

      <section className="footer-section">
    <Footer/>
      </section>
    </>
  );
};

export default Home;

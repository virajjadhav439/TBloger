import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import "../css/Home.css";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
const Home = () => {
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
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>

      <section className="footer-section">
    <Footer/>
      </section>
    </>
  );
};

export default Home;

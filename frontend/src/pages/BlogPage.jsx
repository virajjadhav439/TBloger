import React, { useEffect, useState } from "react";
import API from "../api/api";
import BlogCard from "../components/BlogCard";
import "../css/BlogCard.css";
import "../css/BlogPage.css";
import Navbar from "../components/Navbar";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await API.get("/blogs");

        setBlogs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <>
      <Navbar />

      <div>
        <h1 className="BlogPage-heading">All Blogs</h1>

        <div className="blog-container">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;

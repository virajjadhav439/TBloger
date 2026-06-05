import React, { useEffect, useState } from "react";
import API from "../api/api";
import { useParams, useNavigate } from "react-router-dom";
import '../css/UpdateBlog.css'
const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await API.get(`/blogs/${id}`);

        setFormData({
          title: response.data.title || "",
          category: response.data.category || "",
          content: response.data.content || "",
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/blogs/${id}`,
        {
          title: formData.title,
          category: formData.category,
          content: formData.content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Blog Updated Successfully");
      navigate("/blogs");
    } catch (error) {
      alert(error.response?.data?.message || "Blog Update Failed");
    }
  };

  return (
    <div className="update-blog-page">
      <div className="update-blog-container">
        <h1 className="update-blog-heading">Update Your Blog</h1>

        <p className="update-blog-subheading">
          Update/Edit Your Existing Blog
        </p>

        <form onSubmit={handleSubmit} className="update-blog-form">
          <input
            type="text"
            placeholder="Blog Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />

          <textarea
            placeholder="Write your blog content here..."
            rows="10"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />

          <button className="update-blog-button">
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
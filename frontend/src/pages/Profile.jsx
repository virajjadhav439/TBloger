import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import API from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import '../css/Profile.css'

const Profile = () => {
  //Create State
  const [blogs, setBlogs] = useState([]);
  const [user,setuser] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        //Fetch the Token For Unique Identity
        const token = localStorage.getItem("token");
        //Fetch the Profile of the user From the API and set State
        const profileResponse = await API.get('/auth/profile',{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
        setuser(profileResponse.data)
        //Fetch the Blogs of the User From API and set State
        const blogResponse = await API.get("/blogs/myblogs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(blogResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyBlogs();
  }, []);

  const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want Delete this Blog?"
  )

  if (!confirmDelete) {
    return
  }

  try {

    const token = localStorage.getItem("token")

    await API.delete(
      `/blogs/${id}`,
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    )

    setBlogs(
      blogs.filter(blog => blog._id !== id)
    )

  } catch(error) {

    console.log(error)

  }
}
const handleLogout = async ()=>{
  localStorage.removeItem('token')
  alert('Logged Out Successfully')
  navigate('/')
}

  return (
    <>
      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-header">
            <h1 className="profile-heading">My Profile</h1>
            <h2 className="profile-user-name">{user?.name}</h2>
            <p className="profile-user-email">{user?.email}</p>
            <p className="profile-blog-count">Total Blogs: {blogs.length}</p>
          </div>

          <div className="profile-my-blogs">
            <h2>My Blogs</h2>
            {blogs.map((blog) => (
              <div key={blog._id}>
                <h3>{blog.title}</h3>

                <div className="profile-blog-actions">
                  <Link to={`/update/${blog._id}`} >
                  <button className="profile-edit-button">Edit</button>
                  </Link>

                  <button className="profile-delete-button" onClick={()=>{handleDelete(blog._id)}}>Delete</button>
                </div>
              </div>
            ))}
          </div>

          <div className="profile-logout">
            <button className="profile-logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>  
      </div>
    </>
  );
};

export default Profile;

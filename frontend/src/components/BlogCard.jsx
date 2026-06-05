import { Link } from 'react-router-dom'
import '../css/BlogCard.css'
import AiImage from './ai.png'
function BlogCard({blog}) {
  return (

    <div className="blog-card">

      <div className="blog-image">
        <img src={AiImage} alt="IMAGE" />
        </div>

      <span className="blog-category">
        Technology
      </span>

      <h2 className="blog-title">
        {blog.title}
      </h2>

      <div className="blog-footer">

        <div>
          <h4>
            {blog.author?.name || blog.author}
          </h4>
          <p>May 25, 2026</p> 
        </div>

          <Link to={`/blogs/${blog._id}`}>
        <button className="read-more-btn">
          Read More...
        </button>
          </Link>

      </div>

    </div>

  )
}

export default BlogCard
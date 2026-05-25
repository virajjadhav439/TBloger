import '../css/BlogCard.css'
import AiImage from './ai.png'
function BlogCard() {
  return (

    <div className="blog-card">

      <div className="blog-image">
        <img src={AiImage} alt="IMAGE" />
        </div>

      <span className="blog-category">
        Technology
      </span>

      <h2 className="blog-title">
        Future of AI
      </h2>

      <p className="blog-description">
        Exploring how artificial intelligence is transforming modern applications and development.
      </p>

      <div className="blog-footer">

        <div>
          <h4>Viraj Jadhav</h4>
          <p>May 25, 2026</p>
        </div>

        <button className="read-more-btn">
          Read More
        </button>

      </div>

    </div>

  )
}

export default BlogCard
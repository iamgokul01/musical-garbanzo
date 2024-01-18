import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {data} = props
  const {title, imageUrl, id, avatarUrl, author, topic} = data

  return (
    <Link to={`/blogs/${id}`} className="link-container">
      <div className="blog-list-container">
        <div className="blog-image-section">
          <img alt="title" className="blog-img" src={imageUrl} />
        </div>
        <div className="blog-details-section">
          <p>{topic}</p>
          <p>{title}</p>
          <div className="user-details-section">
            <img src={avatarUrl} className="avatar-img" alt="" />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem

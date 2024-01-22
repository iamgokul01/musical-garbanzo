import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    isLoading: true,
    blogData: {},
  }

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      title: data.title,
      topic: data.topic,
      imageUrl: data.image_url,
    }
    console.log(updatedData)

    this.setState({
      blogData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, blogData} = this.state
    console.log('Render =>', blogData)
    const {title, author, avatarUrl, content, imageUrl} = blogData
    return (
      <div className="page-container">
        <div data-testid="loader">
          {isLoading && (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          )}
        </div>
        <div className={isLoading ? 'hide-container' : 'page-detail-container'}>
          <p className="title-article">{title}</p>
          <div className="user-section">
            <img src={avatarUrl} className="avatar-img" alt="" />
            <p className="author-name">{author}</p>
          </div>
          <img className="article-img" src={imageUrl} alt={title} />
          <p className="content">{content}</p>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails

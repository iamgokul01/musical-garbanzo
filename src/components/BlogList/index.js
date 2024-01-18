// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {
    isLoading: true,
    blogsData: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log('Before =>', data)
    const updateData = data.map(each => ({
      id: each.id,
      author: each.author,
      title: each.title,
      imageUrl: each.image_url,
      topic: each.topic,
      avatarUrl: each.avatar_url,
    }))
    console.log('After =>', updateData)

    this.setState({
      isLoading: false,
      blogsData: updateData,
    })
  }

  render() {
    const {isLoading, blogsData} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogsData.map(each => <BlogItem data={each} key={each.id} />)
        )}
      </div>
    )
  }
}

export default BlogList

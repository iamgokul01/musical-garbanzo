import {Component} from 'react'
import Loader from 'react-loader-spinner'

import BlogList from '../BlogList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
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
      <div data-testid="loader" className="home-container">
        {isLoading && (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        )}
        {isLoading === false ? <BlogList blogsData={blogsData} /> : null}
      </div>
    )
  }
}

export default Home

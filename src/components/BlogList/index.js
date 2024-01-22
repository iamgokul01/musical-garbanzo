// Write your JS code here
import {Component} from 'react'
import UserInfo from '../UserInfo/index'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  render() {
    const {blogsData} = this.props
    return (
      <div className="blog-container">
        <UserInfo />
        {blogsData.map(each => (
          <BlogItem data={each} key={each.id} />
        ))}
      </div>
    )
  }
}

export default BlogList

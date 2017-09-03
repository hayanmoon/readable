import React, { Component } from "react"
import { connect } from "react-redux"
import * as posts from "../actions/posts"
import compare from "../util/compare"
import PostForm from "../components/PostForm"
import Posts from "../components/Posts"
import Header from '../components/Header'


class CategoryContainer extends Component {
  sortPosts = event => {
    this.props.dispatch(posts.filterPosts(event.target.value))
  }

  render() {
    const { categories, posts, filter, category } = this.props
    return (
      <div>
        <Header links={categories}/>
        <Posts title={category} posts={posts} filter={filter} sortPosts={this.sortPosts}/>
        <PostForm mode="new" />
      </div>
    )
  }
}

const mapSateToProps = (store, props) => {
  const { categories, posts } = store
  const filterCategory = props.match.params.category
  return {
    categories,
    posts:  posts.list.sort(compare(posts.filter)).filter(post => {
        if(!post.deleted){
          if (filterCategory) {
            return post.category === filterCategory
          }
          return true
        }
          return false
        }),
    filter: posts.filter,
    category: filterCategory
  }
}

export default connect(mapSateToProps)(CategoryContainer)

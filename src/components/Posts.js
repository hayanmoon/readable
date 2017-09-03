import React, { Component } from 'react'
import { connect } from 'react-redux'
import { vote } from '../actions/posts'
import Post from './Post'

class Posts extends Component {

  upVote = (id)=> {
    this.props.dispatch(vote(id,{option:'upVote'}))
  }

  downVote = (id)=> {
    this.props.dispatch(vote(id,{option:'downVote'}))
  }
  render() {
    const { title, filter, sortPosts, posts} = this.props
    return (
      <div>
        <h5>{title || 'Posts'} </h5>
        <div className="form-group">
          <label className="form-label">sort by</label>
          <select
            className="form-select"
            value={filter}
            onChange={sortPosts}
          >
            <option value="voteScore">Vote Score</option>
            <option value="timestamp">Time</option>
          </select>
        </div>
        {posts && (
          <dl className="list post-list">
            {posts.map(post => {
              return (
                <dd key={post.id}>
                  <Post post={post} upVote={this.upVote} downVote={this.downVote} />
                </dd>
              )
            })}
          </dl>
        )}
        {posts.length < 1 && <h4>No Posts Available</h4>}
      </div>
    )
  }
}


export default connect()(Posts)

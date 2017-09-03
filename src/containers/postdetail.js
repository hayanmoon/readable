import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { vote, deletePost } from '../actions/posts'
import { receiveComments, filterComments } from '../actions/comments'
import * as API from '../services'
import Header from '../components/Header'
import Comments from '../components/Comments'
import CommentForm from '../components/CommentForm'
import { displayDate } from '../util/date'
import { FaArrowUp, FaArrowDown, FaEdit, FaTrashO } from 'react-icons/lib/fa'
import compare from "../util/compare"


class PostContainer extends Component {
  componentDidMount() {
      API.getPostComments(this.props.match.params.id).then(data => {
        this.props.dispatch(receiveComments(data))
      })
  }
  upVote = (id)=> {
    this.props.dispatch(vote(id,{option:'upVote'}))
  }

  downVote = (id)=> {
    this.props.dispatch(vote(id,{option:'downVote'}))
  }
  delete =(id) =>{
    this.props.dispatch(deletePost(id))
  }

  sortComments = event => {
    this.props.dispatch(filterComments(event.target.value))
  }
  render() {
    const { post, comments, categories, filter } = this.props
    const postDate = new Date(post.timestamp)
    return (
      <div>
        <Header links={categories} />
        <Link className='mx-1' to={`/post/${post.id}`}>
          <FaEdit />
        </Link>
        <Link to='/' onClick={()=> this.delete(post.id)}>
          <FaTrashO />
        </Link>
        <div className="tile">
          <div className="tile-icon">
            <div className="tile-score">{post.voteScore}</div>
          </div>
          <div className="tile-content">
            <p className="tile-title">
              {post.title || 'no title'}
              <span className="tile-date text-gray">{displayDate(postDate)}</span>
            </p>
            <p className="tile-subtitle">{post.body}</p>
          </div>
          <div className="tile-action">
            <button className="btn mx-1" onClick={()=> this.upVote(post.id)}>
              <FaArrowUp />
            </button>
            <button className="btn" onClick={()=> this.downVote(post.id)}>
              <FaArrowDown />
            </button>
          </div>
        </div>
        <Comments comments={comments} filter={filter} sortComments={this.sortComments}/>
        <CommentForm  mode='new' parentId={post.id}/>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const postID = props.match.params.id
  const currentPost = state.posts.list.filter(post => post.id === postID)[0]
  const post = currentPost ? currentPost : {}
  const comments = state.comments.list.sort(compare(state.comments.filter)).filter(comment =>{
    if(!comment.deleted){
      if(state.comments.filter){
        return comment.parentId === postID
      }
      return true
    }
    return false
  })
  const categories = state.categories
  const { filter } = state.comments
  return {
    post,
    comments,
    categories,
    filter
  }
}

export default connect(mapStateToProps)(PostContainer)

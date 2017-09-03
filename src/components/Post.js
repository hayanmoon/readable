import React, { Component } from 'react'
import {  Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as API from '../services'
import { displayDate } from '../util/date'
import { FaArrowUp, FaArrowDown } from 'react-icons/lib/fa'
import { addComments  } from '../actions/comments'


class Post extends Component{
    componentDidMount() {
        const { commentCount, post } = this.props
        if(!commentCount){
            API.getPostComments(post.id).then((data)=>{
                this.props.dispatch(addComments(data))
            })
        }
    }

    render(){
        const { upVote, downVote, post, commentCount}  = this.props
        return(
            <div className="card">
            <div className="card-header">
              <div className="card-title h5">
                <Link to={`/${post.category}/${post.id}`}>
                  {post.title || 'no title'}
                </Link>
              </div>
              <div className="card-subtitle text-gray">
                Votes: {post.voteScore} | {' '}
                {displayDate(new Date(post.timestamp))} |
                { ` ${commentCount} Comments` }
              </div>
            </div>
            <div className="card-body">{post.body}</div>
            <div className="card-footer">
              <button className="btn mx-1" onClick={()=> upVote(post.id)}>
                <FaArrowUp />
              </button>
              <button className="btn" onClick={() => downVote(post.id)}>
                <FaArrowDown />
              </button>
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state,props) =>{
    const comments = state.comments.list.filter(comment =>{
        if(!comment.deleted){
          if(state.comments.filter){
            return comment.parentId === props.post.id
          }
          return true
        }
      })
    return{
        commentCount:comments.length
    }
}

export default connect(mapStateToProps)(Post)
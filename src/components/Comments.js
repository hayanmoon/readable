import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowUp, FaArrowDown, FaTimesCircle, FaEdit } from 'react-icons/lib/fa'
import { connect } from 'react-redux'
import { displayDate } from '../util/date'
import { vote, deleteComment } from '../actions/comments'

class Comments extends Component {
  upVote = id => {
    this.props.dispatch(vote(id, { option: 'upVote' }))
  }

  downVote = id => {
    this.props.dispatch(vote(id, { option: 'downVote' }))
  }

  delete = id =>{
    this.props.dispatch(deleteComment(id))
  }

  render() {
    const { title, filter, comments, sortComments } = this.props
    return (
      <div>
        <h5>{comments.length} {title || 'Comment(s)'} </h5>
        <div className="form-group">
          <label className="form-label">sort by</label>
          <select
            className="form-select"
            value={filter}
            onChange={sortComments}
          >
            <option value="voteScore">Vote Score</option>
            <option value="timestamp">Time</option>
          </select>
        </div>
        {comments && (
          <dl className="list post-list">
            {comments.map(comment => {
              return (
                <dd className="item relative" key={comment.id}>
                  <p>{comment.body}</p>
                  <div className="text-gray">
                    Votes: {comment.voteScore} | {' '}
                    {displayDate(new Date(comment.timestamp))}
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn mx-1"
                      onClick={() => this.upVote(comment.id)}
                    >
                      <FaArrowUp />
                    </button>
                    <button
                      className="btn"
                      onClick={() => this.downVote(comment.id)}
                    >
                      <FaArrowDown />
                    </button>
                  </div>
                  <div className='comment-actions'>
                    <Link className="comment-edit" to={`/comment/${comment.id}`}>
                      <FaEdit />
                    </Link>
                    <div className="comment-delete" onClick={() => this.delete(comment.id)}>
                      <FaTimesCircle />
                    </div>
                  </div>
                 
                  <div className="divider" />
                </dd>
              )
            })}
          </dl>
        )}
        {comments.length < 1 && <h4>No Comments Available</h4>}
      </div>
    )
  }
}

export default connect()(Comments)

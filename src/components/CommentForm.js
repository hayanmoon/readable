import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { clearCommentForm, updateCommentForm } from '../actions/commentForm'
import { asyncAddComment, asyncUpdateComment } from '../actions/comments'
import * as API from '../services'
import uuid from 'uuid'

class CommentForm extends Component {
  componentWillMount = () => {
    this.props.dispatch(clearCommentForm())
  }
  componentDidMount = () => {
    if (this.props.mode === 'edit') {
      //check if this is for edit
      API.getComment(this.props.id).then(data => {
        this.props.dispatch(updateCommentForm(data))
      })
    }
  }

  addComment = () => {
    const { body, owner, parentId } = this.props
    this.props.dispatch(
      asyncAddComment( {
        id: uuid(),
        timestamp: Date.now(),
        body,
        owner,
        parentId
      })
    )
    this.props.dispatch(clearCommentForm())
  }

  updateComment = () => {
    const { body,history } = this.props
    this.props.dispatch(
      asyncUpdateComment(this.props.id, {
        body,
        timestamp: new Date()
      })
    )
    history.goBack()
  }
  goBack = () =>{
    this.props.history.goBack()
  }

  handleChange = event => {
    this.props.dispatch(updateCommentForm({ [event.target.name]: event.target.value }))
  }

  render() {
    const {  body, owner, mode } = this.props
    return (
      <div>
        {mode === 'new' ? <h5>New Comment</h5> : <h5>Update Comment</h5>}
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Comment
          </label>
          <input
            className="form-input"
            name="body"
            value={body}
            type="text"
            onChange={this.handleChange}
          />
        </div>
        {mode === 'new' && (
          <div className="form-group">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              className="form-input"
              name="owner"
              type="text"
              value={owner}
              onChange={this.handleChange}
            />
          </div>
        )}

        {mode === 'new' ? (
         
          <button className="btn" onClick={this.addComment}>
            Add Comment
          </button>
          
        ) : (
          <div>
          <button className="btn mx-1" onClick={this.goBack}>
            Back
          </button>
          <button className="btn" onClick={this.updateComment}>
            Update Comment
          </button>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state,props) => {
  return {
    ...state.commentForm,
    categories: state.categories,
    history: props.history
  }
}

export default withRouter( connect(mapStateToProps)(CommentForm))

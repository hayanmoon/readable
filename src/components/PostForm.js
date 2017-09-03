import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateForm, clearForm } from '../actions/postForm'
import { asyncAddPost, asyncUpdatePost } from '../actions/posts'
import * as API from '../services'
import uuid from 'uuid'

class PostForm extends Component {

  componentWillMount = () => {
    this.props.dispatch(clearForm())
  }
  componentDidMount = () => {
    if (this.props.mode === 'edit') {
      //check if this is for edit
      API.getPost(this.props.id).then(data => {
        this.props.dispatch(updateForm(data))
      })
    }
  }

  addPost = () => {
    const { title, body, author, category } = this.props.post
    this.props.dispatch(
      asyncAddPost({
        id: uuid(),
        title,
        body,
        author,
        category,
        timestamp: Date.now()
      })
    )
    this.props.dispatch(clearForm())
  }

  updatePost = () => {
    const { title, body } = this.props.post
    this.props.dispatch(
      asyncUpdatePost(this.props.id, {
        title,
        body
      })
    )
  }

  handleChange = event => {
    this.props.dispatch(updateForm({ [event.target.name]: event.target.value }))
  }

 

  render() {
    const { post, mode, categories } = this.props
    const { category, title, body, author } = post
    return (
      <div>
        {mode === 'new' ? <h5>New Post</h5> : <h5>Update Post</h5>}
        <div className="form-group">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            value={category}
            name="category"
            onChange={this.handleChange}
          >
            {categories &&
              categories.map(category => {
                return (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                )
              })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-input"
            name="title"
            value={title}
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body" className="form-label">
            {' '}
            Content
          </label>
          <textarea
            className="form-input"
            name="body"
            value={body}
            onChange={this.handleChange}
            rows="3"
          />
        </div>
        <div className="form-group">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            className="form-input"
            name="author"
            type="text"
            value={author}
            onChange={this.handleChange}
          />
        </div>
        {mode === 'new' ? (
          <button className="btn" onClick={this.addPost}>
            Add Post
          </button>
        ) : (
          <button className="btn" onClick={this.updatePost}>
            Update Post
          </button>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.postForm,
    categories: state.categories
  }
}

export default connect(mapStateToProps)(PostForm)

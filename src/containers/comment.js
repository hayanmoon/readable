import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentForm from '../components/CommentForm'
import Header from '../components/Header'

class Comment extends Component {
  render() {
      const { categories } = this.props
    const { id } = this.props.match.params
    return (
      <div>
        <Header links={categories} />
        <CommentForm mode="edit" id={id} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    categories: state.categories
  }
}
export default connect(mapStateToProps)(Comment)

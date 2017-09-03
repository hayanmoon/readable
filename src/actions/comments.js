import * as API from '../services'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const FILTER_COMMENTS = 'FILTER_COMMENTS'
export const ADD_COMMENTS = 'ADD_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENTS = 'DELETE_COMMENTS'
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS'
export const COMMENT_UP_VOTE = 'COMMENT_UP_VOTE'
export const COMMENT_DOWN_VOTE = 'COMMENT_DOWN_VOTE'

export const receiveComments = (comments) =>{
    return {
        type:RECEIVE_COMMENTS,
        comments
    }
}

export const filterComments = (filter)=>{
    return{
        type:FILTER_COMMENTS,
        filter
    }
}

export const updateComment = comment => {
  return {
    type: UPDATE_COMMENTS,
    comment
  }
}

export const asyncUpdateComment = (id, comment) => dispatch => {
  API.updateComment(id, comment).then(data => {
    dispatch(updateComment(data))
  })
}

export const addComment = (comment) =>{
    return{
        type:ADD_COMMENTS,
        comment
    }
}

export const addComments = (comment) =>{
  return{
      type:ADD_COMMENT,
      comment
  }
}

export const asyncAddComment = comment => dispatch => {
    API.addComment(comment).then(data => {
      dispatch(addComment(data))
    })
  }

  export const vote = (id, vote) => dispatch => {
    API.postVoteComment(id, vote).then(data => {
      if (vote.option === 'upVote') {
        dispatch({
          type: COMMENT_UP_VOTE,
          id
        })
      } else {
        dispatch({
          type: COMMENT_DOWN_VOTE,
          id
        })
      }
    })
  }

  export const deleteComment = id => dispatch => {
    API.deleteComment(id).then(data => {
     dispatch({
       type:DELETE_COMMENTS,
       id
     })
    })
  }
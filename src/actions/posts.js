import * as API from '../services'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const FILTER_POSTS = 'FILTER_POSTS'
export const ADD_POSTS = 'ADD_POSTS'
export const UPDATE_POST = 'UPDATE_POST'
export const UPDATE_POST_SUCCEEDED = 'UPDATE_POST_SUCCEEDED'
export const POST_UP_VOTE = 'POST_UP_VOTE'
export const POST_DOWN_VOTE = 'POST_DOWN_VOTE'
export const DELETE_POST ='DELETE_POST'

export const addPost = post => {
  return {
    type: ADD_POSTS,
    post
  }
}

export const asyncAddPost = post => dispatch => {
  API.addPost(post).then(data => {
    dispatch(addPost(data))
  })
}

export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export const updatePost = post => {
  return {
    type: UPDATE_POST,
    post
  }
}

export const asyncUpdatePost = (id, post) => dispatch => {
  API.updatePost(id, post).then(data => {
    dispatch(updatePost(data))
  })
}

export const filterPosts = filter => {
  return {
    type: FILTER_POSTS,
    filter
  }
}

export const getPosts = () => dispatch => {
  API.getPosts().then(data => {
    dispatch(receivePosts(data))
  })
}

export const getPost = id => dispatch => {
  API.getPost(id).then(data => {
    dispatch(addPost(data))
  })
}

export const vote = (id, vote) => dispatch => {
  API.postVote(id, vote).then(data => {
    if (vote.option === 'upVote') {
      dispatch({
        type: POST_UP_VOTE,
        id
      })
    } else {
      dispatch({
        type: POST_DOWN_VOTE,
        id
      })
    }
  })
}


export const deletePost = id => dispatch => {
  API.deletePost(id).then(data => {
   dispatch({
     type:DELETE_POST,
     id
   })
  })
}
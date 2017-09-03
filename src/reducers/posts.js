import {
  RECEIVE_POSTS,
  FILTER_POSTS,
  ADD_POSTS,
  UPDATE_POST,
  POST_DOWN_VOTE,
  POST_UP_VOTE,
  DELETE_POST
} from '../actions/posts'

const initialState = {
  list: [],
  filter: 'voteScore'
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST:
    return{
      ...state,
      list:state.list.map((post)=>{
        if(post.id === action.id){
          return {
            ...post,
            deleted:true
          }
        }
        return post
      })
    }
    case POST_DOWN_VOTE:
      return {
        ...state,
        list: state.list.map(post => {
          if (post.id === action.id) {
            return {
              ...post,
              voteScore: post.voteScore - 1
            }
          }
          return post
        })
      }
    case POST_UP_VOTE:
      return {
        ...state,
        list: state.list.map(post => {
          if (post.id === action.id) {
            return {
              ...post,
              voteScore: post.voteScore + 1
            }
          }
          return post
        })
      }

    case ADD_POSTS:
      return {
        ...state,
        list: [...state.list, action.post]
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        list: [...action.posts]
      }
    case FILTER_POSTS:
      return {
        ...state,
        filter: action.filter
      }
    case UPDATE_POST:
      return {
        ...state,
        list: state.list.map(post => {
          if (post.id === action.post.id) {
            return {
              ...post,
              ...action.post
            }
          }
          return post
        })
      }
    default:
      return state
  }
}

export default posts

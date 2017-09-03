import {
  RECEIVE_COMMENTS,
  FILTER_COMMENTS,
  ADD_COMMENTS,
  COMMENT_DOWN_VOTE,
  COMMENT_UP_VOTE,
  DELETE_COMMENTS,
  UPDATE_COMMENTS,
  ADD_COMMENT
} from '../actions/comments'

const initialState = {
  list: [],
  filter: 'voteScore'
}

const comments = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COMMENTS:
    return{
      ...state,
      list:state.list.map((comment)=>{
        if(comment.id === action.id){
          return {
            ...comment,
            deleted:true
          }
        }
        return comment
      })
    }
    case COMMENT_DOWN_VOTE:
      return {
        ...state,
        list: state.list.map(comment => {
          if (comment.id === action.id) {
            return {
              ...comment,
              voteScore: comment.voteScore - 1
            }
          }
          return comment
        })
      }
    case COMMENT_UP_VOTE:
      return {
        ...state,
        list: state.list.map(comment => {
          if (comment.id === action.id) {
            return {
              ...comment,
              voteScore: comment.voteScore + 1
            }
          }
          return comment
        })
      }
      case UPDATE_COMMENTS:
      return {
        ...state,
        list: state.list.map(comment => {
          if (comment.id === action.comment.id) {
            return {
              ...comment,
              ...action.comment
            }
          }
          return comment
        })
      }
    case ADD_COMMENTS:
      return {
        ...state,
        list: [...state.list, action.comment]
      }
      case ADD_COMMENT:
      return {
        ...state,
        list: [...state.list, ...action.comment]
      }
    case FILTER_COMMENTS:
      return {
        ...state,
        filter: action.filter
      }
    case RECEIVE_COMMENTS:
      return {
        ...state,
        list: [...action.comments]
      }
    default:
      return state
  }
}

export default comments

import {
  UPDATE_COMMENT_FORM,
  CLEAR_COMMENT_FORM,
  UPDATE_COMMENT_FORM_MODE
} from '../actions/commentForm'

const initialState = {
    body: '',
    owner: ''
}

const commentForm = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT_FORM:
      return {
        ...state,
        ...action.formDetails
        }
    case UPDATE_COMMENT_FORM_MODE:
      return {
        ...state,
        mode: action.mode
      }
    case CLEAR_COMMENT_FORM:
      return initialState
    default:
      return state
  }
}

export default commentForm

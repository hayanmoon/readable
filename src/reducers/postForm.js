import { UPDATE_FORM, CLEAR_FORM,UPDATE_FORM_MODE } from "../actions/postForm"

const initialState = {
  post:{
    category: "react",
    title: "",
    body: "",
    author: ""
  }
}

const postForm = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        post:{
          ...state.post,
          ...action.formDetails
        }
      }
      case UPDATE_FORM_MODE:
      return {
        ...state,
        mode:action.mode
      }
    case CLEAR_FORM:
      return initialState
    default:
      return state
  }
}

export default postForm

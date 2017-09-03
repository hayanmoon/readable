export const UPDATE_COMMENT_FORM = "UPDATE_COMMENT_FORM"
export const CLEAR_COMMENT_FORM = "CLEAR_COMMENT_FORM"
export const UPDATE_COMMENT_FORM_MODE = "UPDATE_COMMENT_FORM_MODE"

export const updateCommentForm = formDetails => {
  return {
    type: UPDATE_COMMENT_FORM,
    formDetails
  }
}

export const clearCommentForm = () => {
  return {
    type: CLEAR_COMMENT_FORM
  }
}

export const updateCommentMode = mode => {
  return {
    type: UPDATE_COMMENT_FORM_MODE,
    mode
  }
}

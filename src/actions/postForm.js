export const UPDATE_FORM = "UPDATE_FORM"
export const CLEAR_FORM = "CLEAR_FORM"
export const UPDATE_FORM_MODE = "UPDATE_FORM_MODE"

export const updateForm = formDetails => {
  return {
    type: UPDATE_FORM,
    formDetails
  }
}

export const clearForm = () => {
  return {
    type: CLEAR_FORM
  }
}

export const updateMode = mode => {
  return {
    type: UPDATE_FORM_MODE,
    mode
  }
}

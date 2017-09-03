import { combineReducers } from 'redux'
import categories from './categories'
import comments from './comments'
import posts from './posts'
import postForm from './postForm'
import commentForm from './commentForm'

const rootReducer = combineReducers({
    categories,
    comments,
    posts,
    postForm,
    commentForm
})

export default rootReducer
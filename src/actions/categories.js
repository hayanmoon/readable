import * as API from '../services'

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"
export const RECEIVE_CATEGORIES_POSTS = "RECEIVE_CATEGORIES_POSTS"

export const receiveCategories = (categories) => {
    return {
        type:RECEIVE_CATEGORIES,
        categories
    }
}

export const receiveCategoryPotsts = ({categoryID,posts}) => {
    return {
        type:RECEIVE_CATEGORIES_POSTS,
        categoryID,
        posts
    }
}



export const getCategories = () => (dispatch) => {
    API.getCategories().then((data) =>{
        dispatch(receiveCategories(data))
    })
}

export const getCategoryPosts = (categoryID) => (dispatch) =>{
    API.getCategoryPosts(categoryID).then(data=>{
        dispatch(receiveCategoryPotsts({
            categoryID,
            posts:data
        }))
    })
}




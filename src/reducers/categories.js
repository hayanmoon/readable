import * as actions from '../actions/categories'

const initialState = []

const categories = (state = initialState, action) => {
    switch (action.type) {
        case actions.RECEIVE_CATEGORIES:
            return [
                ...action.categories
            ]
        case actions.RECEIVE_CATEGORIES_POSTS:
           return state.map((category)=>{
               if(action.categoryID === category.name){
                   return {
                       ...category,
                       posts:action.posts && action.posts.map((post)=>{
                           return post.id
                       })
                   }
               }
               return category
            })
            
        default:
            return state
    }
}

export default categories
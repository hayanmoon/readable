import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from '../components/PostForm'
import Header from '../components/Header'

class Post extends Component{
    render(){
        const { categories, match } = this.props
        const { id } = match.params
        return(
            <div>
                <Header links={categories}/>
                <PostForm mode='edit' id={id}/>
            </div>
        )
    }
}

const mapStatetoProps = (state) =>{
    return{
        categories: state.categories
    }
}

export default connect(mapStatetoProps)(Post)
import React, { Component } from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import MainContainer from "./containers/main"
import PostDetailContainer from "./containers/postdetail"
import PostContainer from "./containers/post"
import CommentContainer from "./containers/comment"
import * as categories from "./actions/categories"
import * as posts from "./actions/posts"
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(categories.getCategories()) //allcategories
    this.props.dispatch(posts.getPosts()) //allposts 
  }

  render() {
    return (
      <div className="container grid-lg">
        <Switch>
          <Route path="/post/:id?" component={PostContainer}/> 
          <Route path="/comment/:id?" component={CommentContainer}/> 
          <Route exact path="/:category?" component={MainContainer} />
          <Route path="/:category/:id" component={PostDetailContainer} />
        </Switch>
      </div>
    )
  }
}

export default withRouter( connect()(App) )

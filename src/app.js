import React from 'react'
import Login from './lander/Login'
import Articles from './protected/Articles'
import ArticleDetails from './protected/ArticleDetails'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import articles from './common/reducers/articles'
import { combineReducers } from 'redux'



import {
    Switch,
    Route,
    BrowserRouter as Router
  } from 'react-router-dom'

const App = props => {

const store = createStore(combineReducers({articles}));
  return (
    <Provider store={store}>
      <Router>
          <Switch>
              <Route path="/articles">
                  <Articles/>
              </Route>
              <Route path="/articleDetail">
                  <ArticleDetails/>
              </Route>
              <Route path="/">
                  <Login/>
              </Route>
              
          </Switch>
      </Router>
    </Provider>
  )
}

export default App

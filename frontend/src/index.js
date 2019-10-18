import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './Store/Reducers'
import thunk from 'redux-thunk'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Views/Home'
import './GlobalStyles/GlobalStyles.scss'
import Menu from './Components/Menu/Menu'
import Ratings from './Views/Ratings/Ratings'

const middlewares = [thunk]
const store = createStore(
  reducers, 
  applyMiddleware(...middlewares)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Menu />
      <Route 
        exact component={Home}
        path="/"
      />
      <Route 
        exact component={Ratings}
        path="/rating"
      />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
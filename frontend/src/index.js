import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './Store/Reducers'
import thunk from 'redux-thunk'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Views/Home'

const middlewares = [thunk]
const store = createStore(
  reducers, 
  applyMiddleware(...middlewares)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route 
        exact component={Home}
        path="/"
      />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
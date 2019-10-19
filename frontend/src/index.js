import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './Store/Reducers'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import MainContent from './Components/MainContent/MainContent'
import './GlobalStyles/GlobalStyles.scss'

const middlewares = [thunk]
const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
)

ReactDOM.render( 
  <Provider store={store}>
    <BrowserRouter >
      <MainContent />
    </BrowserRouter> 
  </Provider>,
  document.getElementById('root')
)
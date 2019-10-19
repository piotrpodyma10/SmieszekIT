import { combineReducers } from 'redux'
import { modalReducer } from './ModalReducer/modalReducer'
// import { signInReducer } from './userReducers'

export default combineReducers({
  modal: modalReducer
  // signIn: signInReducer,
})
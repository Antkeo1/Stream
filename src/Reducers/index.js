import {combineReducers} from 'redux'
// renaming reducer, from redux-form, formReducer
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'



export default combineReducers({
  auth: authReducer,
  form: formReducer
})

import _ from 'lodash'
import {
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS
} from '../Actions/types'

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_STREAM:
      return {...state, [action.payload.id]: action.payload}

    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload}

    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload}

    case DELETE_STREAM:
      return {...state, }

    case FETCH_STREAMS:
      return {}

    default:
      return state
  }
}

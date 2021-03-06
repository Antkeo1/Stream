import _ from 'lodash'
import {
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS
} from '../Actions/types'

export default (state = {}, action) => {
  console.log(state)
  switch(action.type) {

    case FETCH_STREAMS:
      return {...state, ..._.mapKeys(action.payload, 'id' )}

    case FETCH_STREAM:
      return {...state, [action.payload.id]: action.payload}

    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload}

    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload}

    // using omit function from lodash
    case DELETE_STREAM:
      return _.omit(state, action.payload)

    default:
      return state
  }

}

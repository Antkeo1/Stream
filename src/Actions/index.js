import streams from '../api/streams'
import history from '../history'
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM
} from './types'

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

// post request with axios
export const createStream = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth
    const res = await streams.post('/streams', {...formValues, userId})
    dispatch({ type: CREATE_STREAM, payload: res.data})
    // to navagate back to root page
    // after create success
    history.push('/')

  }

// get request for list of streams
export const fetchStreams = () => async dispatch => {
  const res = await streams.get('/streams')
  dispatch({ type: FETCH_STREAMS, payload: res.data })
}

export const fetchStream = (id) => async dispatch => {
  return await streams.get(`/streams/${id}` ).then((res) => {
  dispatch({type: FETCH_STREAM, payload: res.data})
    })
  .catch((error) => {
    console.log('error')
  })
}

export const editStream = (id, formValues) => async dispatch => {
  return await streams.patch(`/streams/${id}`, formValues).then((res) => {
    dispatch({ type: EDIT_STREAM, payload: res.data})
    history.push('/')
    console.log('success!!')
  })
  .catch((error) => {
    console.log('not working')
  })
}

export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`)
  dispatch({type: DELETE_STREAM, payload: id })
  history.push('/')
}

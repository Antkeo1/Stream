import React from 'react'
// Field is react component created in redux-form
// reduxForm is function simular to connect function
// with it we will be able to call action creators and
// get form data into our component
import {connect} from 'react-redux'
import { createStream } from '../../Actions'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component {

  // api request
  onSubmit = (formValues) => {
    this.props.createStream(formValues)
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

export default connect(
  null,
  { createStream}
)(StreamCreate)

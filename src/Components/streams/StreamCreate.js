import React from 'react'
// Field is react component created in redux-form
// reduxForm is function simular to connect function
// with it we will be able to call action creators and
// get form data into our component
import {Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import { createStream } from '../../Actions'

class StreamCreate extends React.Component {
  renderError = ({error, touched}) => {
    if(touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      )
    }
  }

  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error': ''}`
    return (
      <div className={className}>
      <label>{label}</label>
        <input {...input} autoComplete='off'/>
        {this.renderError(meta)}
      </div>
    )
  }

  // api request
  onSubmit = (formValues) => {
    this.props.createStream(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}
            className='ui form error'>
        <Field name='title' component={this.renderInput} label='Enter title'/>
        <Field name='description' component={this.renderInput} label='Enter description' />
        <button className='ui button primary'>Submit</button>
      </form>
    )
  }
}

// to make sure input is filled in and deal with error
const validate = formValues => {
  const errors = {}
  if(!formValues.title) {
    // only run if user didnt enter title
    errors.title = 'Please Enter title'
  }

  if (!formValues.description) {
    errors.description = 'Please Enter description'
  }

  return errors
}

const formWrapped = reduxForm({
  form:'StreamCreate',
  validate
})(StreamCreate)

export default connect(null, { createStream})(formWrapped)

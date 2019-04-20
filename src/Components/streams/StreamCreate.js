import React from 'react'
// Field is react component created in redux-form
// reduxForm is function simular to connect function
// with it we will be able to call action creators and
// get form data into our component
import {Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
  renderInput = ({input, label}) => {
    console.log(label)
    return (
      <div className='field'>
      <label>{label}</label>
        <input {...input} />
      </div>
    )
  }

  render() {
    return (
      <form className='ui form'>
        <Field name='title' component={this.renderInput} label='Enter title'/>
        <Field name='desciption' component={this.renderInput} label='Enter desiption' />
      </form>
    )
  }
}


export default reduxForm({
  form:'StreamCreate'
})(StreamCreate)

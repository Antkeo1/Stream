import React from 'react'
import { connect} from 'react-redux'
import { editStream, fetchStream } from '../../Actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    console.log(formValues)
    this.props.editStream(formValues)
  }

  render() {
    if(!this.props.stream) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
            initialValues
            onSubmit={this.onSubmit}/>
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {
  editStream, fetchStream}
)(StreamEdit)

import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../Actions'

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  // a method to show buttons for user's stream
  renderUserButtons = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className='right floated content'>
          <button className='ui button primary'>Edit</button>
          <button className='ui button negative'>Delete</button>
        </div>
      )
    }
  }

  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id}>
          {this.renderUserButtons(stream)}
          <i className='large middle aligned icon camera' />
          <div className='content'>
            {stream.title}
            <div className='description'>
              {stream.description}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
  return (

    <div>
      <h2>Streams</h2>
      <div className='ui celled list'>{this.renderList()}</div>
    </div>
)
  }
}

const mapStateToProps = (state) => {
  // Object.values is a function that takes object as argument
  // object gets taken and put into an array
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)

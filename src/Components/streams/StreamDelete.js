import React from 'react'
import Modal from '../Modal'
import { connect } from 'react-redux'
import { deleteStream} from '../../Actions'


const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className='ui button negative'>Delete</button>
      <button className='ui button'>Cancel</button>
    </React.Fragment>
  )

  return (
    <div>
      StreamDelete
      <Modal
        title='Delete Stream'
        content='Are you sure?'
        actions={actions}
      />
    </div>
  )
}

export default connect(null, {deleteStream})(StreamDelete)

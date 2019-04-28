import React from 'react'
import Modal from '../Modal'
import { connect } from 'react-redux'
import { deleteStream} from '../../Actions'


const StreamDelete = () => {
  return (
    <div>
      StreamDelete
      <Modal />
    </div>
  )
}

export default connect(null, {deleteStream})(StreamDelete)

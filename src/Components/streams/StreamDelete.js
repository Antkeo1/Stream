import React from 'react'
import { connect } from 'react-redux'
import { deleteStream} from '../../Actions'


const StreamDelete = () => {
  return <div>StreamDelete</div>
}

export default connect(null, {deleteStream})(StreamDelete)

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'

class App extends React.Component {
  state = {

  }

  render() {
    return (
      <div className='ui container '>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={StreamList}/>
            <Route path='/streams/new' exact component={StreamCreate}/>
            <Route path='/streams/edit' exact component={StreamEdit}/>
            <Route path='/streams/show' exact component={StreamShow}/>
            <Route path='/streams/delete' exact component={StreamDelete}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App

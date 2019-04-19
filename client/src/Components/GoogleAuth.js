import React from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../Actions'

class GoogleAuth extends React.Component {
  // wired google api with client id and email as the scope for oauth
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:'645899597003-o2cne0ffui7ass2meojl73a0c3dfmud8.apps.googleusercontent.com',
        scope: 'email'

      }).then(() => {
        // window.gapi.auth2.getAuthInstance()
        // is a library that allows us to signin/signout
        // and if the user is signed in or out
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange()
        this.onAuthChange(this.auth.isSignedIn.get())
        // event listener
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  // onChange event handler
  onAuthChange = isSignedIn => {
    if(isSignedIn) {
      this.props.signIn()
    } else {
      this.props.signOut()
    }
  }

  // onclick methods
  onClickSignIn = () => {
    this.auth.signIn()
  }

  onClickSignOut = () => {
    this.auth.signOut()
  }

  renderAuthButton = () => {

    if (this.props.isSignedIn === null ) {
      return
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onClickSignOut} className='ui red google button'>
          <i className='google icon'/>
          SignOut
        </button>
      )
    } else {
      return (
        <button onClick={this.onClickSignIn} className='ui red google button'>
          <i className='google icon'/>
          Sign in with Google
        </button>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps,
  {signIn, signOut}
)(GoogleAuth)

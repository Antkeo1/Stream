import React from 'react'

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  }
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
        // event listener
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  // onChange event handler
  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    })
  }

  // onclick methods
  onSignIn = () => {
    this.auth.signIn()
  }

  onSignOut = () => {
    this.auth.signOut()
  }

  renderAuthButton = () => {
    if (this.state.isSignedIn === null ) {
      return null
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className='ui red google button'>
          <i className='google icon'/>
          SignOut
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignIn} className='ui red google button'>
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

export default GoogleAuth

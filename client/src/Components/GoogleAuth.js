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

  renderAuthButton = () => {
    if (this.state.isSignedIn === null ) {
      return <div>idk if we are sign in</div>
    } else if (this.state.isSignedIn) {
      return <div>im signed in!!</div>
    } else {
      return <div>I am not signed in</div>
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth

import React from 'react'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:'645899597003-o2cne0ffui7ass2meojl73a0c3dfmud8.apps.googleusercontent.com',
        scope: 'email'

      })
    })
  }

  render() {
    return <div>GoogleAuth</div>
  }
}

export default GoogleAuth

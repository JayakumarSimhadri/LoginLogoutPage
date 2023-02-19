import './index.css'

import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: true, message: 'Please Login'}

  loginLogoutFunc = () => {
    const {isLogin} = this.state

    if (isLogin) {
      this.setState({isLogin: false, message: 'Welcome User'})
    } else {
      this.setState({isLogin: true, message: 'Please Login'})
    }
  }

  render() {
    const {isLogin, message} = this.state
    return (
      <div>
        <Message message={message} />
        {isLogin ? (
          <Login loginLogoutFunc={this.loginLogoutFunc} />
        ) : (
          <Logout loginLogoutFunc={this.loginLogoutFunc} />
        )}
      </div>
    )
  }
}

export default Home

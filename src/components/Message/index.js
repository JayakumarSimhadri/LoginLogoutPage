import './index.css'

import {Component} from 'react'

class Message extends Component {
  render() {
    const {message} = this.props

    return (
      <>
        <h1>{message}</h1>
      </>
    )
  }
}

export default Message

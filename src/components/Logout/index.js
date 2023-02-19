import './index.css'

const Logout = props => {
  const loginLogoutFunc = props

  const logoutFunc = () => {
    loginLogoutFunc()
  }

  return (
    <button type="button" onClick={logoutFunc}>
      Logout
    </button>
  )
}

export default Logout

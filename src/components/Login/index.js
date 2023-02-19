import './index.css'

const Login = props => {
  const {loginLogoutFunc} = props

  const loginFunc = () => {
    loginLogoutFunc()
  }

  return (
    <button type="button" onClick={loginFunc}>
      Login
    </button>
  )
}

export default Login

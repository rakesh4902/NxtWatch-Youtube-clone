import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  LoginContainer,
  FormContainer,
  LoginLogo,
  InputContainer,
  LoginButton,
  SubmitErrorMsg,
  UserLabel,
  UserInput,
  CheckboxContainer,
  Checkbox,
  ShowPassword,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    showErrorMsg: '',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  OnShowPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = showErrorMsg => {
    this.setState({showSubmitError: true, showErrorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeAndSavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818 ' : '#f9f9f9'
          const loGinContainerBgColor = isDarkTheme ? '#000000' : '#ffffff'
          const textColor = isDarkTheme ? '#ffffff' : '#212121'
          const LogoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const {showSubmitError, showErrorMsg} = this.state

          const renderUserName = () => {
            const {username} = this.state
            return (
              <>
                <UserLabel htmlFor="username" color={textColor}>
                  USERNAME
                </UserLabel>
                <UserInput
                  type="text"
                  id="username"
                  value={username}
                  name="username"
                  onChange={this.onChangeUserName}
                  placeholder="Username"
                />
              </>
            )
          }

          const renderUserPassword = () => {
            const {password, showPassword} = this.state
            const inputType = showPassword ? 'text' : 'password'
            return (
              <>
                <UserLabel htmlFor="password" color={textColor}>
                  PASSWORD
                </UserLabel>
                <UserInput
                  type={inputType}
                  id="password"
                  value={password}
                  name="password"
                  onChange={this.onChangePassword}
                  placeholder="Password"
                />
                <CheckboxContainer>
                  <Checkbox
                    id="checkbox"
                    type="checkbox"
                    onChange={this.OnShowPassword}
                    color={textColor}
                  />
                  <ShowPassword htmlFor="checkbox" color={textColor}>
                    Show Password
                  </ShowPassword>
                </CheckboxContainer>
              </>
            )
          }

          return (
            <LoginContainer bgColor={bgColor}>
              <FormContainer
                onSubmit={this.submitForm}
                bgColor={loGinContainerBgColor}
              >
                <LoginLogo src={LogoUrl} alt="website logo" />
                <InputContainer>{renderUserName()}</InputContainer>
                <InputContainer>{renderUserPassword()}</InputContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && (
                  <SubmitErrorMsg>*{showErrorMsg}</SubmitErrorMsg>
                )}
              </FormContainer>
            </LoginContainer>
          )
        }}
      </ThemeAndSavedVideosContext.Consumer>
    )
  }
}

export default Login

import {BsMoonFill, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  LogoLink,
  NavbarHeader,
  WebLogo,
  UserActionContainer,
  ThemeButton,
  LogoutIconButton,
  LogoutButton,
  ProfileImageIcon,
  ProfileIcon,
  LogoutPopupContainer,
  PopupDescription,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme, onChangeActiveTab} = value

        const onChangeTheme = () => {
          toggleTheme()
        }

        const LogoUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const bgColor = isDarkTheme ? '#181818 ' : '#f9f9f9'
        const color = isDarkTheme ? '#ffffff' : '#00306e'
        const iconColor = isDarkTheme ? '#ffffff' : '#000000'
        const buttonThemeColor = isDarkTheme ? '#ffffff' : '#3b82f6'
        const LogoutBgColor = isDarkTheme ? '#231f20' : '#e2e8f0'

        const changeActiveTab = () => {
          onChangeActiveTab('Home')
        }

        return (
          <>
            <NavbarHeader bgColor={bgColor}>
              <LogoLink to="/">
                <WebLogo
                  src={LogoUrl}
                  alt="website logo"
                  onClick={changeActiveTab}
                />
              </LogoLink>

              <UserActionContainer>
                <ThemeButton
                  data-testid="theme"
                  type="button"
                  onClick={onChangeTheme}
                >
                  {isDarkTheme ? (
                    <BsBrightnessHigh size={30} color={iconColor} />
                  ) : (
                    <BsMoonFill size={25} />
                  )}
                </ThemeButton>
                <ProfileImageIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <ProfileIcon>
                  <GiHamburgerMenu size={25} color={iconColor} />
                </ProfileIcon>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" bgColor={buttonThemeColor}>
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <LogoutPopupContainer bgColor={LogoutBgColor}>
                      <PopupDescription color={color}>
                        Are you sure, you want to logout?
                      </PopupDescription>
                      <ButtonsContainer>
                        <CancelButton
                          data-testid="closeButton"
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </CancelButton>
                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </ButtonsContainer>
                    </LogoutPopupContainer>
                  )}
                </Popup>

                <Popup
                  modal
                  trigger={
                    <LogoutIconButton type="button" bgColor={buttonThemeColor}>
                      <FiLogOut size={25} color={iconColor} />
                    </LogoutIconButton>
                  }
                >
                  {close => (
                    <LogoutPopupContainer bgColor={LogoutBgColor}>
                      <PopupDescription color={color}>
                        Are you sure, you want to logout?
                      </PopupDescription>
                      <ButtonsContainer>
                        <CancelButton
                          type="button"
                          data-testid="closeButton"
                          onClick={() => close()}
                        >
                          Cancel
                        </CancelButton>
                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </ButtonsContainer>
                    </LogoutPopupContainer>
                  )}
                </Popup>
              </UserActionContainer>
            </NavbarHeader>
          </>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}
export default withRouter(Header)

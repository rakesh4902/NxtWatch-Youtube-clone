import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  NavBar,
  NavLgContainer,
  NavOptions,
  NavOptionContainer,
  NavLink,
  NavText,
  ContactInfo,
  ContactHeader,
  ContactIcons,
  ContactFooter,
  ContactImage,
  NavSmallContainer,
} from './styledComponents'

const NavBarActions = () => (
  <ThemeAndSavedVideosContext.Consumer>
    {value => {
      const {activeTab, onChangeActiveTab, isDarkTheme} = value

      const onChangeHomeTab = () => {
        onChangeActiveTab('Home')
      }
      const onChangeTrendingTab = () => {
        onChangeActiveTab('Trending')
      }
      const onChangeGamingTab = () => {
        onChangeActiveTab('Gaming')
      }
      const onChangeSavedVideosTab = () => {
        onChangeActiveTab('SavedVideos')
      }

      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

      const activeTabBg = isDarkTheme ? '#606060' : '#cbd5e1'

      const activeTabFontColor = isDarkTheme ? '#f9f9f9' : '#000000'

      const notActiveTabFontColor = isDarkTheme ? '#cccccc' : '#383838'

      const NavFooterColor = isDarkTheme ? '#ebebeb' : '#1e293b'

      return (
        <NavBar>
          <NavLgContainer bgColor={bgColor}>
            <NavOptions>
              <NavLink to="/">
                <NavOptionContainer
                  bgColor={activeTab === 'Home' && activeTabBg}
                  onClick={onChangeHomeTab}
                >
                  <AiFillHome
                    size={25}
                    color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                  />
                  <NavText
                    color={
                      activeTab === 'Home'
                        ? activeTabFontColor
                        : notActiveTabFontColor
                    }
                  >
                    Home
                  </NavText>
                </NavOptionContainer>
              </NavLink>
              <NavLink to="/trending">
                <NavOptionContainer
                  bgColor={activeTab === 'Trending' && activeTabBg}
                  onClick={onChangeTrendingTab}
                >
                  <HiFire
                    size={25}
                    color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                  />
                  <NavText
                    color={
                      activeTab === 'Trending'
                        ? activeTabFontColor
                        : notActiveTabFontColor
                    }
                  >
                    Trending
                  </NavText>
                </NavOptionContainer>
              </NavLink>

              <NavLink to="/gaming">
                <NavOptionContainer
                  bgColor={activeTab === 'Gaming' && activeTabBg}
                  onClick={onChangeGamingTab}
                >
                  <SiYoutubegaming
                    size={25}
                    color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                  />
                  <NavText
                    color={
                      activeTab === 'Gaming'
                        ? activeTabFontColor
                        : notActiveTabFontColor
                    }
                  >
                    Gaming
                  </NavText>
                </NavOptionContainer>
              </NavLink>

              <NavLink to="/saved-videos">
                <NavOptionContainer
                  bgColor={activeTab === 'SavedVideos' && activeTabBg}
                  onClick={onChangeSavedVideosTab}
                >
                  <CgPlayListAdd
                    size={25}
                    color={activeTab === 'SavedVideos' ? '#ff0b37' : '#909090'}
                  />
                  <NavText
                    color={
                      activeTab === 'SavedVideos'
                        ? activeTabFontColor
                        : notActiveTabFontColor
                    }
                  >
                    Saved Videos
                  </NavText>
                </NavOptionContainer>
              </NavLink>
            </NavOptions>
            <ContactInfo color={NavFooterColor}>
              <ContactHeader>CONTACT US</ContactHeader>
              <ContactIcons>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactIcons>
              <ContactFooter>
                Enjoy! Now to see your channels and recommendations!
              </ContactFooter>
            </ContactInfo>
          </NavLgContainer>
          <NavSmallContainer bgColor={bgColor}>
            <NavLink to="/">
              <AiFillHome
                size={30}
                onClick={onChangeHomeTab}
                color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
            <NavLink to="/trending">
              <HiFire
                size={30}
                onClick={onChangeTrendingTab}
                color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
            <NavLink to="/gaming">
              <SiYoutubegaming
                size={30}
                onClick={onChangeGamingTab}
                color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
            <NavLink to="/saved-videos">
              <CgPlayListAdd
                size={30}
                onClick={onChangeSavedVideosTab}
                color={activeTab === 'SavedVideos' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
          </NavSmallContainer>
        </NavBar>
      )
    }}
  </ThemeAndSavedVideosContext.Consumer>
)

export default NavBarActions

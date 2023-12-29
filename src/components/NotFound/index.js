import Header from '../Header'
import NavBarActions from '../NavBarActions'
import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'
import {
  PageNotFoundContainer,
  PageNotFoundView,
  PageNotFoundImage,
  PageNotFoundHead,
  PageNotFoundDesc,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndSavedVideosContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const descColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const NotFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NavBarActions />
          <PageNotFoundContainer bgColor={bgColor}>
            <PageNotFoundView>
              <PageNotFoundImage src={NotFoundImageUrl} alt="not found" />
              <PageNotFoundHead color={headingColor}>
                Page Not Found
              </PageNotFoundHead>
              <PageNotFoundDesc color={descColor}>
                we are sorry, the page you requested could not be found.
              </PageNotFoundDesc>
            </PageNotFoundView>
          </PageNotFoundContainer>
        </>
      )
    }}
  </ThemeAndSavedVideosContext.Consumer>
)

export default NotFound

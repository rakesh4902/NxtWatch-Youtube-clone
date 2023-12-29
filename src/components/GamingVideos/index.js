import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import NavBarActions from '../NavBarActions'
import GamingVideosView from '../GamingVideosView'
import FailureView from '../FailureView'
import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  GamingVideosContainer,
  GamingVideosHeader,
  GamingIconButton,
  GamingText,
  GamingVideoList,
  LoaderContainer,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingVideos extends Component {
  state = {
    gamingVideosData: [],
    apiRequestStatus: apiStatus.initial,
  }

  componentDidMount() {
    this.getGamingVideosData()
  }

  getGamingVideosData = async () => {
    this.setState({apiRequestStatus: apiStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const caseConversionData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideosData: caseConversionData,
        apiRequestStatus: apiStatus.success,
      })
    } else {
      this.setState({apiRequestStatus: apiStatus.failure})
    }
  }

  renderGamingVideosView = () => {
    const {gamingVideosData} = this.state
    return (
      <GamingVideoList>
        {gamingVideosData.map(eachVideo => (
          <GamingVideosView key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </GamingVideoList>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  onRetryGetGamingVideos = () => {
    this.getGamingVideosData()
  }

  renderFailureView = () => (
    <FailureView onRetry={this.onRetryGetGamingVideos} />
  )

  renderGamingVideos = () => {
    const {apiRequestStatus} = this.state
    switch (apiRequestStatus) {
      case apiStatus.success:
        return this.renderGamingVideosView()
      case apiStatus.failure:
        return this.renderFailureView()
      case apiStatus.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndSavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          // console.log(isDarkTheme)
          const bgColor = isDarkTheme ? '#0f0f0f ' : '#f9f9f9'
          const trendingHeaderBgColor = isDarkTheme ? '#212121' : '#ebebeb'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const iconBgColor = isDarkTheme ? '#000000' : '#d7dfe9'

          return (
            <>
              <Header />
              <NavBarActions />
              <GamingVideosContainer data-testid="gaming" bgColor={bgColor}>
                <GamingVideosHeader bgColor={trendingHeaderBgColor}>
                  <GamingIconButton bgColor={iconBgColor}>
                    <SiYoutubegaming size={35} color="#ff0000" />
                  </GamingIconButton>
                  <GamingText color={textColor}>Gaming</GamingText>
                </GamingVideosHeader>
                {this.renderGamingVideos()}
              </GamingVideosContainer>
            </>
          )
        }}
      </ThemeAndSavedVideosContext.Consumer>
    )
  }
}

export default GamingVideos

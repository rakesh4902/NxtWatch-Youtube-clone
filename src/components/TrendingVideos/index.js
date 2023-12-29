import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import NavBarActions from '../NavBarActions'
import TrendingVideosView from '../TrendingVideosView'
import FailureView from '../FailureView'
import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'
import {
  TrendingVideosContainer,
  TrendingVideosHeader,
  TrendingIconButton,
  TrendingText,
  LoaderContainer,
  TrendingVideoList,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingVideos extends Component {
  state = {
    trendingVideosData: [],
    apiRequestStatus: apiStatus.initial,
  }

  componentDidMount() {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({apiRequestStatus: apiStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      //  console.log(data)
      const caseConversionData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        trendingVideosData: caseConversionData,
        apiRequestStatus: apiStatus.success,
      })
    } else {
      this.setState({apiRequestStatus: apiStatus.failure})
    }
  }

  renderTrendingVideosView = () => {
    const {trendingVideosData} = this.state
    return (
      <TrendingVideoList>
        {trendingVideosData.map(eachVideo => (
          <TrendingVideosView key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideoList>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  onRetryGetTrendingVideos = () => {
    this.getTrendingVideosData()
  }

  renderFailureView = () => (
    <FailureView onRetry={this.onRetryGetTrendingVideos} />
  )

  renderTrendingVideos = () => {
    const {apiRequestStatus} = this.state
    switch (apiRequestStatus) {
      case apiStatus.success:
        return this.renderTrendingVideosView()
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
      <ThemeAndSavedVideosContext>
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
              <TrendingVideosContainer data-testid="trending" bgColor={bgColor}>
                <TrendingVideosHeader bgColor={trendingHeaderBgColor}>
                  <TrendingIconButton type="button" bgColor={iconBgColor}>
                    <HiFire size={35} color="#ff0000" />
                  </TrendingIconButton>
                  <TrendingText color={textColor}>Trending</TrendingText>
                </TrendingVideosHeader>
                {this.renderTrendingVideos()}
              </TrendingVideosContainer>
            </>
          )
        }}
      </ThemeAndSavedVideosContext>
    )
  }
}

export default TrendingVideos

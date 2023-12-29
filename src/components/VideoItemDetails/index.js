import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import NavBarActions from '../NavBarActions'
import WatchVideo from '../WatchVideo'
import FailureView from '../FailureView'
import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {VideoDetailsViewContainer, LoaderContainer} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetailView extends Component {
  state = {
    videoDetailsData: [],
    apiRequestStatus: apiStatus.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetailsData()
  }

  getVideoDetailsData = async () => {
    this.setState({apiRequestStatus: apiStatus.inProgress})
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const caseConversionData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      console.log(caseConversionData)

      this.setState({
        videoDetailsData: caseConversionData,
        apiRequestStatus: apiStatus.success,
      })
    } else {
      this.setState({apiRequestStatus: apiStatus.failure})
    }
  }

  clickLiked = () => {
    this.setState(prev => ({
      isLiked: !prev.isLiked,
      isDisLiked: false,
    }))
  }

  clickDisLiked = () => {
    this.setState(prev => ({
      isDisLiked: !prev.isDisLiked,
      isLiked: false,
    }))
  }

  renderLoaderView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderPlayVideoView = () => {
    const {videoDetailsData, isLiked, isDisLiked} = this.state
    return (
      <WatchVideo
        videoDetailsData={videoDetailsData}
        clickLiked={this.clickLiked}
        clickDisLiked={this.clickDisLiked}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
      />
    )
  }

  onRetryGetVideo = () => {
    this.getVideoDetailsView()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetryGetVideo} />

  renderVideoDetailView = () => {
    const {apiRequestStatus} = this.state

    switch (apiRequestStatus) {
      case apiStatus.success:
        return this.renderPlayVideoView()
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
          const bgColor = isDarkTheme ? '#0f0f0f ' : '#f9f9f9'

          return (
            <>
              <Header />
              <NavBarActions />
              <VideoDetailsViewContainer
                data-testid="videoItemDetails"
                bgColor={bgColor}
              >
                {this.renderVideoDetailView()}
              </VideoDetailsViewContainer>
            </>
          )
        }}
      </ThemeAndSavedVideosContext.Consumer>
    )
  }
}

export default VideoDetailView

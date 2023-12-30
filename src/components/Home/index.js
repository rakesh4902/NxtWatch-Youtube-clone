import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import NavBarActions from '../NavBarActions'
import FailureView from '../FailureView'

import HomeVideos from '../HomeVideos'
import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  HomeContainer,
  AdContainer,
  AdLogoImage,
  AdText,
  AdButton,
  AdContentContainer,
  AdCloseContainer,
  AdCloseButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  LoaderContainer,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    homeVideosData: [],
    searchInput: '',
    apiRequestStatus: apiStatus.initial,
    adDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    const {searchInput} = this.state
    this.setState({apiRequestStatus: apiStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        homeVideosData: caseConversionData,
        apiRequestStatus: apiStatus.success,
      })
    } else {
      this.setState({apiRequestStatus: apiStatus.failure})
    }
  }

  onCloseAd = () => {
    this.setState({adDisplay: 'none'})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchInputResults = () => {
    this.getVideosData()
  }

  onRetryGetVideos = () => {
    this.setState({searchInput: ''}, this.getVideosData)
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderHomeVideosView = () => {
    const {homeVideosData} = this.state
    return (
      <HomeVideos
        homeVideosData={homeVideosData}
        onRetry={this.onRetryGetVideos}
      />
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetryGetVideos} />

  renderHomeVideosData = () => {
    const {apiRequestStatus} = this.state

    switch (apiRequestStatus) {
      case apiStatus.success:
        return this.renderHomeVideosView()
      case apiStatus.failure:
        return this.renderFailureView()
      case apiStatus.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, adDisplay} = this.state
    return (
      <ThemeAndSavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818 ' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <>
              <Header />
              <NavBarActions />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <AdContainer data-testid="banner" adDisplay={adDisplay}>
                  <AdContentContainer>
                    <AdLogoImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <AdText>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </AdText>
                    <AdButton type="button">GET IT NOW</AdButton>
                  </AdContentContainer>
                  <AdCloseContainer>
                    <AdCloseButton data-testid="close" onClick={this.onCloseAd}>
                      <AiOutlineClose size={25} />
                    </AdCloseButton>
                  </AdCloseContainer>
                </AdContainer>
                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    color={textColor}
                    onChange={this.onChangeSearchInput}
                  />
                  <SearchIconContainer
                    data-testid="searchButton"
                    onClick={this.getSearchInputResults}
                    type="button"
                  >
                    <AiOutlineSearch size={20} />
                  </SearchIconContainer>
                </SearchContainer>
                {this.renderHomeVideosData()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeAndSavedVideosContext.Consumer>
    )
  }
}

export default Home

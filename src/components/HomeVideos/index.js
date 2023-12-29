import HomeVideoCard from '../HomeVideoCard'
import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  NoVideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
  RetryButton,
  VideoCardList,
} from './styledComponents'

const HomeVideos = props => {
  const {homeVideosData, onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }
  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        return homeVideosData.length > 0 ? (
          <VideoCardList>
            {homeVideosData.map(eachVideo => (
              <HomeVideoCard video={eachVideo} key={eachVideo.id} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideosView>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading color={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosNote color={noteColor}>
              Try different keywords or remove search filter
            </NoVideosNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosView>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}

export default HomeVideos

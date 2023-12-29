import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import NavbarActions from '../NavBarActions'
import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'
import TrendingVideosView from '../TrendingVideosView'

import {
  SavedVideosContainer,
  SavedVideosHeader,
  SavedIconButton,
  SavedText,
  SavedVideoList,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndSavedVideosContext.Consumer>
    {value => {
      const {savedVideos, isDarkTheme} = value
      // console.log(savedVideos)
      const bgColor = isDarkTheme ? '#0f0f0f ' : '#f9f9f9'
      const trendingHeaderBgColor = isDarkTheme ? '#212121' : '#ebebeb'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const iconBgColor = isDarkTheme ? '#000000' : '#d7dfe9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
      return (
        <>
          <Header />
          <NavbarActions />
          <SavedVideosContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideosHeader bgColor={trendingHeaderBgColor}>
              <SavedIconButton bgColor={iconBgColor}>
                <CgPlayListAdd size={35} color="#ff0000" />
              </SavedIconButton>
              <SavedText color={textColor}>Saved Videos</SavedText>
            </SavedVideosHeader>
            {savedVideos.length > 0 ? (
              <SavedVideoList>
                {savedVideos.map(eachVideo => (
                  <TrendingVideosView
                    key={eachVideo.id}
                    videoDetails={eachVideo}
                  />
                ))}
              </SavedVideoList>
            ) : (
              <NoSavedVideosView>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideosHeading color={headingColor}>
                  No saved videos found
                </NoSavedVideosHeading>
                <NoSavedVideosNote color={noteColor}>
                  You can save your videos while watching them
                </NoSavedVideosNote>
              </NoSavedVideosView>
            )}
          </SavedVideosContainer>
        </>
      )
    }}
  </ThemeAndSavedVideosContext.Consumer>
)

export default SavedVideos

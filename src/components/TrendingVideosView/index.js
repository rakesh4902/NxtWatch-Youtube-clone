import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'
import {
  TrendingVideo,
  TrendingThumbNailImage,
  TrendingVideoDetails,
  TrendingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingNameAndViewsForSmallDisplay,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
  VideoLink,
} from './styledComponents'

const TrendingVideosView = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails
  // console.log(videoDetails)
  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <VideoLink to={`/videos/${id}`}>
            <TrendingVideo>
              <TrendingThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoDetails>
                <TrendingProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingContentSection>
                  <TrendingTitle color={textColor}>{title}</TrendingTitle>
                  <TrendingNameAndViewsForSmallDisplay>
                    <TrendingChannelName>{name}</TrendingChannelName>
                    <TrendingViewsAndDate>
                      {viewCount} views<TrendingDot> &#8226; </TrendingDot>
                      {publishedAt}
                    </TrendingViewsAndDate>
                  </TrendingNameAndViewsForSmallDisplay>
                </TrendingContentSection>
              </TrendingVideoDetails>
            </TrendingVideo>
          </VideoLink>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}

export default TrendingVideosView

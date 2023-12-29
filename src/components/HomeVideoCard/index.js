import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'
import {
  ListItem,
  ThumbNailImage,
  VideoDetails,
  ChannelLogo,
  ContentSection,
  ChannelTitle,
  ChannelName,
  ViewsAndDate,
  Dot,
  VideoLink,
} from './styledComponents'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video
  return (
    <ThemeAndSavedVideosContext>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <VideoLink to={`/videos/${id}`}>
            <ListItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <ChannelTitle textColor={textColor}>{title} </ChannelTitle>
                  <ChannelName>{name}</ChannelName>
                  <ViewsAndDate>
                    {viewCount} views<Dot> &#8226; </Dot> {publishedAt}
                  </ViewsAndDate>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </VideoLink>
        )
      }}
    </ThemeAndSavedVideosContext>
  )
}

export default HomeVideoCard

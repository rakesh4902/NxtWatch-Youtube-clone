import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  BtnContainer,
} from './styledComponents'

const WatchVideo = props => {
  const {
    videoDetailsData,
    isLiked,
    isDisLiked,
    clickLiked,
    clickDisLiked,
  } = props
  const {
    videoUrl,
    title,
    viewCount,
    publishedAt,
    profileImageUrl,
    name,
    description,
    subscriberCount,
  } = videoDetailsData

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisLiked()
  }

  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {savedVideos, addVideo, isDarkTheme} = value

        const bgColor = isDarkTheme ? '#0f0f0f ' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const likedIconColor = isLiked ? '#2563eb' : '#64748b'
        const dislikedIconColor = isDisLiked ? '#2563eb' : '#64748b'

        const isSavedIndex = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetailsData.id,
        )

        // console.log(isSavedIndex)
        const onClickSaveVideo = () => {
          addVideo(videoDetailsData)
        }

        let isSaved = false
        if (isSavedIndex === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        console.log(isSaved)

        const saveIconColor = isSaved ? '#2563eb' : textColor

        return (
          <VideoPlayer bgColor={bgColor}>
            <ReactPlayer url={videoUrl} controls width="100%" />
            <PlayVideoTitle color={textColor}>{title}</PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus>
                {viewCount} views
                <PlayVideoDot> &#8226; </PlayVideoDot>
                {publishedAt}
              </PlayVideoStatus>
              <PlaySocialButtonsContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={likedIconColor}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText>Like</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={dislikedIconColor}
                    onClick={onClickDislike}
                  >
                    <AiOutlineDislike size={25} />
                    <ButtonText>Dislike</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={saveIconColor}
                    onClick={onClickSaveVideo}
                  >
                    <BiListPlus size={25} />
                    <ButtonText> {isSaved ? 'Saved' : 'Save'}</ButtonText>
                  </SocialButton>
                </BtnContainer>
              </PlaySocialButtonsContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage src={profileImageUrl} alt="channel logo" />
              <ChannelInfo>
                <ChannelName color={textColor}>{name}</ChannelName>
                <ChannelSubscribers>
                  {subscriberCount} subscribers
                </ChannelSubscribers>
                <ChannelDescription color={textColor}>
                  {description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}

export default WatchVideo

import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const TrendingVideo = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 40px;
  }
`

export const TrendingThumbNailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const TrendingProfileImage = styled.img`
  height: 45px;
  border-radius: 50px;
  margin-left: 10px;
  margin-top: 15px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px;
  margin-left: 5px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const TrendingTitle = styled.p`
  font-family: 'Roboto';
  margin-top: 0px;
  font-size: 20px;
  font-weight: 450;
  color: ${props => props.color};
  @media screen and (max-width: 767px) {
    font-size: 17px;
    font-weight: 400;
    margin-top: 5px;
  }
`

export const TrendingNameAndViewsForSmallDisplay = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    margin-top: 0px;
  }
`
export const TrendingChannelName = styled.p`
  font-family: 'Roboto';
  margin-top: 0px;
  font-size: 15px;
  font-weight: 400;
  color: #475569;
`
export const TrendingViewsAndDate = styled.p`
  font-family: 'Roboto';
  margin-top: 0px;
  font-size: 15px;
  font-weight: 400;
  color: #475569;
`
export const TrendingDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`

export const VideoLink = styled(Link)`
  text-decoration: none;
`

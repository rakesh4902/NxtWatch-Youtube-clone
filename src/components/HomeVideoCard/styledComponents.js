import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

export const ThumbNailImage = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  @media screen and (max-width: 767px) {
    margin: 10px;
  }
`
export const ChannelLogo = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  margin-right: 15px;
  margin-top: 15px;
  @media screen and (max-width: 767px) {
    margin-right: 15px;
  }
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 767px) {
    padding-right: 15px;
  }
`
export const ChannelTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.textColor};
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-top: 0px;
  color: #475569;
`
export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-top: 0px;
  color: #475569;
  margin-bottom: 80px;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
  color: #475569;
  padding-top: 15px;
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`

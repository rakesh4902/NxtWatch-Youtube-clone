import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GamingCartItem = styled.li`
  background: none;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 260px;
    margin-right: 0px;
    padding: 20px;
  }
`
export const GamingThumbNailImage = styled.img`
  width: 160px;
  height: 220px;
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 300px;
    flex-wrap: wrap;
  }
`

export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 50px;
`
export const GamingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`

export const GamingViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  font-weight: 450;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`

export const VideoLink = styled(Link)`
  text-decoration: none;
`

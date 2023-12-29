import styled from 'styled-components'

export const GamingVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const GamingVideosHeader = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  padding: 25px;
  margin-left: 0px;
  width: 100%;
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100%;
  }
`
export const GamingIconButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border-width: 0px;
  background-color: ${props => props.bgColor};
  margin-left: 100px;
  @media screen and (max-width: 576px) {
    margin-left: 10px;
    height: 60px;
    width: 60px;
    border-radius: 100px;
  }
`

export const GamingText = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 30px;
  text-align: center;
  margin-left: 20px;
  font-weight: bold;
  @media screen and (max-width: 576px) {
    margin-left: 15px;
    font-size: 22px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const GamingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px;
  padding-top: 30px;
  padding-left: 0px;
  width: 98%;
  @media screen and (min-width: 576px and max-width:767px) {
    padding: 10px;
    padding-top: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px;
    padding-top: 30px;
  }
`

import styled from 'styled-components'

export const HomeContainer = styled.div`
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
export const AdContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: ${props => (props.adDisplay === 'flex' ? 'flex' : 'none')};
  width: 100%;
  background-size: cover;
  height: 240px;
  justify-content: space-between;
  padding: 20px;
  @media screen and (max-width: 767px) {
    height: 200px;
  }
`
export const AdContentContainer = styled.div`
  width: 50%;
`
export const AdCloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const AdLogoImage = styled.img`
  width: 120px;
  height: 30px;
`
export const AdButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 45px;
  width: 100px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  border: 2px solid #000000;
  color: #000000;
  background: none;
  cursor: pointer;
`
export const AdText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #000000;
  @media screen and (min-width: 576px) {
    font-size: 22px;
    width: 70%;
    flex-wrap: wrap;
  }
`
export const AdCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
  width: 30px;
  margin-left: 0px;
  margin-right: 30px;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;
  width: 80%;
  align-items: center;
  height: 30px;

  @media screen and (min-width: 576px) {
    width: 35%;
  }
`
export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebebeb;
  width: 90px;
  height: 27px;
  border: none;
`

export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px;
  border: none;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

import styled from 'styled-components'

export const PageNotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  min-height: 92vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const PageNotFoundView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const PageNotFoundImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const PageNotFoundHead = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  text-align: center;
  color: ${props => props.color};
`

export const PageNotFoundDesc = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  color: ${props => props.color};
`

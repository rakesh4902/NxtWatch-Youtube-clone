import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`
export const WebLogo = styled.img`
  width: 80px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 40px;
    padding: 5px;
  }
`

export const UserActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 15px;
  margin-top: 5px;
  @media screen and (max-width: 767px) {
    margin-right: 10px;
  }
`

export const ProfileImageIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ProfileIcon = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  background: none;
  border: none;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  border: 2px solid;
  border-color:${props => props.bgColor}
  font-family: 'Roboto';
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  background-color: transparent;
  color: ${props => props.bgColor};
  margin-left: 6px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 6px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`
export const LogoutPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
  width: 350px;
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  padding: 30px;
  @media screen and (min-width: 768px) {
    height: 180px;
    width: 400px;
  }
`
export const PopupDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: black;
  text-align: center;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`

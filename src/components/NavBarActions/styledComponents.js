import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
`

export const NavLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  top: 60px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`

export const NavOptionContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-left: 25px;
  font-weight: ${props => props.fontSize};
  color: ${props => props.color};
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  color: ${props => props.color};
`
export const ContactHeader = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const ContactImage = styled.img`
  height: 40px;

  border-radius: 50px;
  margin-right: 10px;
`
export const ContactFooter = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
`
export const NavSmallContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  padding: 10px;
  position: fixed;
  bottom: 0;
  align-items: center;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

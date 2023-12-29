import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 375px;
  background-color: ${props => props.bgColor};
`

export const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  height: 30px;
  color: #ffffff;
  margin-top: 20px;
  cursor: pointer;
`

export const SubmitErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ff0b37;
`

export const UserLabel = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.color};
  font-weight: 550;
`

export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  outline: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
  background-color: transparent;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px;
  margin-left: 0px;
  color: ${props => props.color};
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  font-weight: 550;
`

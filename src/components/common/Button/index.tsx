import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ea3546;
  color: white;
  border-radius: 4px;
  font-weight: 700;
  height: 37px;
  min-width: 100px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    opacity: 0.9;
    transition: all 0.3s ease-in-out;
  }
`

export default Button

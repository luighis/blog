import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  font-weight: 700;
  height: 37px;
  min-width: 100px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    background: ${({ theme }) => theme.colors.red01};
    transition: all 0.3s ease-in-out;
  }
`

export default Button

import styled from 'styled-components'

const TextError = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.red};
  font-weight: 600;
  font-size: 20px;
  line-height: 16px;
  padding-top: 50px;
`

export default TextError

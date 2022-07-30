import styled from 'styled-components'

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.linearGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 45px;
  line-height: 47px;
  font-weight: 700;
  padding: 20px 0;
  display: inline-flex;
`

export default Title

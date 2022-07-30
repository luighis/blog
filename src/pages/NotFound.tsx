import styled from 'styled-components'

const NotFoundContainer = styled.p`
  text-align: center;
  padding-top: 100px;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.red};
`

const NotFound = () => <NotFoundContainer>Resource not found: 404</NotFoundContainer>

export default NotFound

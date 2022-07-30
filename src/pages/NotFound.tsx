import styled from 'styled-components'

const NotFoundContainer = styled.p`
  text-align: center;
  padding-top: 100px;
  color: red;
`

const NotFound = () => <NotFoundContainer>Resource not found: 404</NotFoundContainer>

export default NotFound

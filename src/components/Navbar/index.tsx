import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.black01};
  padding: 30px 50px;
  display: flex;
  gap: 25px;
  .active {
    color: ${({ theme }) => theme.colors.red};
  }
  @media only screen and (max-width: 600px) {
    & {
      padding: 20px;
      justify-content: center;
    }
  }
`

const StyledLink = styled(NavLink)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    color: ${({ theme }) => theme.colors.red};
    transition: all 0.3s;
  }
`

const Navbar = () => {
  return (
    <NavContainer>
      <StyledLink to='/'>Dashboard</StyledLink>
      <StyledLink to='/users'>Users</StyledLink>
    </NavContainer>
  )
}
export default Navbar

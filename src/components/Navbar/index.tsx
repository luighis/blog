import { NavLink, Outlet } from 'react-router-dom'
import theme from '../../theme'
import styled from 'styled-components'

const { navHover } = theme.colors

const NavContainer = styled.nav`
  background-color: black;
  padding: 20px 50px;
  display: flex;
  gap: 15px;
  .active {
    color: ${navHover};
  }
  @media only screen and (max-width: 600px) {
    & {
      padding: 20px;
      justify-content: center;
    }
  }
`

const StyledLink = styled(NavLink)`
  font-weight: 500;
  color: white;
  &:hover {
    color: ${navHover};
    transition: all 0.3s;
  }
`

const Navbar = () => {
  return (
    <NavContainer>
      <StyledLink to='/'>Dashboard</StyledLink>
      <StyledLink to='/users'>Users</StyledLink>
      <Outlet />
    </NavContainer>
  )
}
export default Navbar

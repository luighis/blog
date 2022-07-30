import { useNavigate } from 'react-router-dom'
import { ReactComponent as IconOpen } from './../../assets/images/open.svg'
import { UserProps } from '../../types'
import styled from 'styled-components'

const TableContainer = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.white01};
  border-radius: 3px;
  margin: 20px 0;
  overflow-x: auto;
`

const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  & tr:hover {
    background-color: ${({ theme }) => theme.colors.black02};
  }
`

const StyledTh = styled.th`
  background-color: ${({ theme }) => theme.colors.black02};
  color: ${({ theme }) => theme.colors.white01};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white01};
  padding: 12px;
`

const StyledTd = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white01};
  color: ${({ theme }) => theme.colors.white02};
  font-size: 14px;
  font-weight: 300;
`

const StyledIconOpen = styled(IconOpen)`
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.red};
  &:hover {
    fill: ${({ theme }) => theme.colors.white};
    transition: all 0.3s ease-in-out;
  }
`

interface TableProps {
  tableHeaders: string[]
  users: UserProps[]
}

const Table = ({ tableHeaders, users }: TableProps) => {
  const navigate = useNavigate()

  const handleClick = (id, name) => () => navigate(`/users/${id}/posts?name=${name}`)

  const createThead = (th) => {
    return th.map((title, index) => <StyledTh key={index}>{title}</StyledTh>)
  }
  const createTbody = (users: UserProps[]) =>
    users.map((user) => (
      <tr key={user.id}>
        <StyledTd onClick={handleClick(user.id, user.name)} role='button'>
          <StyledIconOpen />
        </StyledTd>
        <StyledTd>{user.name}</StyledTd>
        <StyledTd>{user.username}</StyledTd>
        <StyledTd>{user.email}</StyledTd>
        <StyledTd>{user.address.street}</StyledTd>
        <StyledTd>{user.address.city}</StyledTd>
      </tr>
    ))

  return (
    <TableContainer>
      <TableWrapper>
        <thead>
          <tr>{createThead(tableHeaders)}</tr>
        </thead>
        <tbody>{createTbody(users)}</tbody>
      </TableWrapper>
    </TableContainer>
  )
}

export default Table

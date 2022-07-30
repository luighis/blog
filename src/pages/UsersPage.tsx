import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/store'
import { fetchUsers } from '../store/users/users.actions'
import { usersSelector } from '../store/users/users.slice'
import Table from '../components/Table'
import { THEAD } from '../constants'
import TextError from '../components/common/TextError'
import Loading from '../components/common/Loading'

const UsersPage = () => {
  const dispatch = useAppDispatch()
  const { users, loading, hasErrors } = useAppSelector(usersSelector)

  const renderUsers = () => {
    if (loading) return <Loading>Loading users...</Loading>
    if (hasErrors) return <TextError>Unable to display Users.</TextError>
    return <Table tableHeaders={THEAD} users={users} />
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return <>{renderUsers()}</>
}

export default UsersPage

import { API } from '../../constants'
import { getUsers, getUsersFailure, getUsersSuccess } from './users.slice'

export function fetchUsers() {
  return async (dispatch) => {
    dispatch(getUsers())

    try {
      const response = await fetch(`${API}users`)
      if (!response.ok) throw response
      const data = await response.json()

      dispatch(getUsersSuccess(data))
    } catch (error) {
      dispatch(getUsersFailure())
    }
  }
}

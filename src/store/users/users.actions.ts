import { API } from '../../constants'
import { loading, getUsersSuccess, failure } from './users.slice'

export function fetchUsers() {
  return async (dispatch) => {
    dispatch(loading())

    try {
      const response = await fetch(`${API}users`)
      if (!response.ok) throw response
      const data = await response.json()

      dispatch(getUsersSuccess(data))
    } catch (error) {
      dispatch(failure())
    }
  }
}

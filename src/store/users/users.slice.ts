import { createSlice } from '@reduxjs/toolkit'
import { UserProps } from '../../types'

interface UsersState {
  loading: boolean
  hasErrors: boolean
  users: UserProps[]
}

export const initialState: UsersState = {
  loading: false,
  hasErrors: false,
  users: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true
    },
    getUsersSuccess: (state, { payload }) => {
      state.users = payload
      state.loading = false
      state.hasErrors = false
    },
    failure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { loading, getUsersSuccess, failure } = usersSlice.actions
export const usersSelector = (state) => state.users
export default usersSlice.reducer

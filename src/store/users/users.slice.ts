import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserProps } from '../../types'

interface UsersState {
  loading: boolean
  hasErrors: boolean
  users: any
}

export const initialState = {
  loading: false,
  hasErrors: false,
  users: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: (state) => {
      state.loading = true
    },
    getUsersSuccess: (state, { payload }) => {
      state.users = payload
      state.loading = false
      state.hasErrors = false
    },
    getUsersFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { getUsers, getUsersSuccess, getUsersFailure } = usersSlice.actions
export const usersSelector = (state) => state.users
export default usersSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  postsUser: [],
}

const postsUserSlice = createSlice({
  name: 'postsUser',
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true
    },
    getPostsUserSuccess: (state, { payload }) => {
      state.postsUser = payload
      state.loading = false
      state.hasErrors = false
    },
    postsUserRemove: (state, { payload }) => {
      state.postsUser = state.postsUser.filter(({ id }) => id !== payload)
      state.loading = false
      state.hasErrors = false
    },
    postsUserAdd: (state, { payload }) => {
      const postNew = { ...payload, id: Date.now() }
      state.postsUser.unshift(postNew)
      state.loading = false
      state.hasErrors = false
    },
    updatePostsUser: (state, { payload }) => {
      const index = state.postsUser.findIndex(({ id }) => id == payload.id)
      state.postsUser.splice(index, 1, payload)
      state.loading = false
      state.hasErrors = false
    },
    failure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const {
  loading,
  getPostsUserSuccess,
  updatePostsUser,
  failure,
  postsUserRemove,
  postsUserAdd,
} = postsUserSlice.actions
export const postsUserSelector = (state) => state.postsUser
export default postsUserSlice.reducer

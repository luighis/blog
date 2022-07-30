import {
  loading,
  getPostsUserSuccess,
  failure,
  postsUserAdd,
  updatePostsUser,
  postsUserRemove,
} from './postsUser.slice'
import { API } from '../../constants'

export function fetchPostsUser(userId) {
  return async (dispatch) => {
    dispatch(loading())

    try {
      const response = await fetch(`${API}posts?userId=${userId}`)

      if (!response.ok) throw response
      const data = await response.json()

      dispatch(getPostsUserSuccess(data))
    } catch (error) {
      dispatch(failure())
    }
  }
}

export function fetchAddPostsUser(post) {
  return async (dispatch) => {
    dispatch(loading())

    try {
      const response = await fetch(`${API}posts`, {
        method: 'POST',
        body: JSON.stringify({
          ...post,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      if (!response.ok) throw response
      const data = await response.json()

      dispatch(postsUserAdd(data))
    } catch (error) {
      dispatch(failure())
    }
  }
}

export function fetchRemovePostsUser(postId) {
  console.log('🚀 ~ file: postsUser.action.ts ~ line 53 ~ fetchRemovePostsUser ~ postId', postId)
  return async (dispatch) => {
    dispatch(loading())

    try {
      const response = await fetch(`${API}posts/${postId}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw response
      // const data = await response.json()

      dispatch(postsUserRemove(postId))
    } catch (error) {
      dispatch(failure())
    }
  }
}

export function FetchUpdatePostsUser(postId, updatePost) {
  return async (dispatch) => {
    dispatch(loading())

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
          ...updatePost,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      if (!response.ok) throw response
      const data = await response.json()

      dispatch(updatePostsUser(data))
    } catch (error) {
      dispatch(failure())
    }
  }
}

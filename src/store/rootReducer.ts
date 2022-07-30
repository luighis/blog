import { combineReducers } from 'redux'
import postsUserReducer from './postsUser/postsUser.slice'
import usersReducer from './users/users.slice'

const rootReducer = combineReducers({
  users: usersReducer,
  postsUser: postsUserReducer,
})

export default rootReducer

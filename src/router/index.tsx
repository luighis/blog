import { Routes, Route } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import NotFound from '../pages/NotFound'
import PostsUsersPage from '../pages/PostsUsersPage'
import UsersPage from '../pages/UsersPage'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />} />
      <Route path='users' element={<UsersPage />} />
      <Route path='users/:userId/posts' element={<PostsUsersPage />} />
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}

export default Router

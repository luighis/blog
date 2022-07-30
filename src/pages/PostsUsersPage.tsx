import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/common/Loading'
import SubTitle from '../components/common/SubTitle'
import TextError from '../components/common/TextError'
import Title from '../components/common/Title'
import Post from '../components/Post'
import { useAppDispatch, useAppSelector } from '../hooks/store'
import { fetchAddPostsUser, fetchPostsUser } from '../store/postsUser/postsUser.action'
import { postsUserSelector } from '../store/postsUser/postsUser.slice'
import styled from 'styled-components'
import Button from '../components/common/Button'
import FormModal from '../components/FormModal'

const StyledSubTitle = styled(SubTitle)`
  color: red;
  padding: 5px 0 10px;
`

const TitleContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`

const PostsUsersPage = () => {
  const [open, setOpen] = useState(false)
  const params = useParams()
  const dispatch = useAppDispatch()
  const query = new URLSearchParams(window.location.search)
  const { userId } = params
  const user = query.get('name')
  const { postsUser, loading, hasErrors } = useAppSelector(postsUserSelector)

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  const handleForm = ({ inputValue, textareaValue }) => {
    const post = { userId: Number(userId), title: inputValue, body: textareaValue }
    dispatch(fetchAddPostsUser(post))
    handleClose()
  }

  const renderPosts = () => {
    if (loading) return <Loading>Loading Posts...</Loading>
    if (hasErrors) return <TextError>Unable to display Posts.</TextError>
    return postsUser.map((post) => <Post key={post.id} post={post} />)
  }

  useEffect(() => {
    dispatch(fetchPostsUser(userId))
  }, [dispatch])

  return (
    <section>
      <FormModal openModal={open} handleClose={handleClose} handleForm={handleForm} />
      <TitleContainer>
        <Title>Posts</Title>
        <Button onClick={handleOpen}>Add Post</Button>
      </TitleContainer>

      <StyledSubTitle>User - {user}</StyledSubTitle>
      {renderPosts()}
    </section>
  )
}

export default PostsUsersPage
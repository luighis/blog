import { memo, useState } from 'react'
import Text from '../common/Text'
import { PostProps as Props } from '../../types'
import styled from 'styled-components'
import SubTitle from '../common/SubTitle'
import Button from '../common/Button'
import FormModal from '../FormModal'
import { fetchRemovePostsUser, FetchUpdatePostsUser } from '../../store/postsUser/postsUser.action'
import { useAppDispatch } from '../../hooks/store'

const PostContainer = styled.article`
  padding-bottom: 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white01};
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`

interface PostProps {
  post: Props
}

const Post = ({ post }: PostProps) => {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  const { title, body, userId, id } = post

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  const handleForm = ({ inputValue, textareaValue }) => {
    const updatePost = { id, userId, title: inputValue, body: textareaValue }
    dispatch(FetchUpdatePostsUser(id, updatePost))
    handleClose()
  }
  const handleRemovePost = () => dispatch(fetchRemovePostsUser(id))

  return (
    <PostContainer>
      <FormModal openModal={open} handleClose={handleClose} handleForm={handleForm} />
      <SubTitle>{title}</SubTitle>
      <Text>{body.substring(0, 150)}</Text>
      <ButtonContainer>
        <Button onClick={handleOpen}>Edit</Button>
        <Button onClick={handleRemovePost}>Remove</Button>
      </ButtonContainer>
    </PostContainer>
  )
}

export default memo(Post)

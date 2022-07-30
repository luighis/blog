import { ReactComponent as IconLoading } from './../../../assets/images/loading.svg'
import styled, { keyframes } from 'styled-components'
import { ChildrenProps } from '../../../types'

const TextContainer = styled.div`
  text-align: center;
  padding-top: 50px;
`

const Text = styled.p`
  text-align: center;
  color: red;
  font-size: 14px;
  line-height: 16px;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledIconLoading = styled(IconLoading)`
  animation: ${rotate} 2s linear infinite;
`

const Loading = ({ children }: ChildrenProps) => (
  <TextContainer>
    <StyledIconLoading />
    <Text>{children}</Text>
  </TextContainer>
)

export default Loading

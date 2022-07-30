import { ReactComponent as IconLoading } from './../../../assets/images/loading.svg'
import styled, { keyframes } from 'styled-components'
import { ChildrenProps } from '../../../types'

const TextContainer = styled.div`
  text-align: center;
  padding-top: 50px;
`

const Text = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.purple};
  font-size: 20px;
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
  fill: ${({ theme }) => theme.colors.red};
  animation: ${rotate} 2s linear infinite;
  margin-bottom: 15px;
`

const Loading = ({ children }: ChildrenProps) => (
  <TextContainer>
    <StyledIconLoading />
    <Text>{children}</Text>
  </TextContainer>
)

export default Loading

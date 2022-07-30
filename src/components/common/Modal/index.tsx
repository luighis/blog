import styled from 'styled-components'
import { ChildrenProps } from '../../../types'

const ModalContainer = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.opacity};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`

const ModalWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black01};
  position: absolute;
  padding: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 90%;
  border: 1px solid ${({ theme }) => theme.colors.white02};
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.08) 0px 10px 15px -3px, rgba(0, 0, 0, 0.01) 0px 4px 6px -2px;
`

const Modal = ({ children }: ChildrenProps) => (
  <ModalContainer>
    <ModalWrapper>{children}</ModalWrapper>
  </ModalContainer>
)

export default Modal

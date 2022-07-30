import styled from 'styled-components'
import { ChildrenProps } from '../../../types'

const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const ModalWrapper = styled.div`
  background-color: grey;
  position: absolute;
  padding: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 90%;
  border: 1px solid #e2e8f0;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.08) 0px 10px 15px -3px, rgba(0, 0, 0, 0.01) 0px 4px 6px -2px;
`

const Modal = ({ children }: ChildrenProps) => (
  <ModalContainer>
    <ModalWrapper>{children}</ModalWrapper>
  </ModalContainer>
)

export default Modal

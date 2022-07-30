import Modal from '../common/Modal'
import Form from '../Form'
import { ReactComponent as IconClose } from './../../assets/images/close.svg'
import styled from 'styled-components'

const StyledIconClose = styled(IconClose)`
  position: absolute;
  right: 0;
  top: -41px;
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.white};
  &:hover {
    fill: ${({ theme }) => theme.colors.red};
  }
`

interface FormModalProps {
  openModal: boolean
  handleClose: () => void
  handleForm: (value) => void
}

const FormModal = ({ openModal, handleClose, handleForm }: FormModalProps) => (
  <>
    {openModal && (
      <Modal>
        <StyledIconClose role='button' onClick={handleClose} />
        <Form handleForm={handleForm} />
      </Modal>
    )}
  </>
)

export default FormModal

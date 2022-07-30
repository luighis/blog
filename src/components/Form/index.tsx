import { useState } from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import { Input, Textarea } from '../common/Input'

const FormContainer = styled.form`
  button {
    margin-top: 8px;
  }
`

interface FormProps {
  handleForm: (value) => void
}

const Form = ({ handleForm }: FormProps) => {
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!inputValue && !textareaValue) return
    handleForm({ inputValue, textareaValue })
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        placeholder='Title'
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        required
      />
      <Textarea
        placeholder='Description'
        as='textarea'
        onChange={(event) => setTextareaValue(event.target.value)}
        value={textareaValue}
        required
      />
      <Button>Send</Button>
    </FormContainer>
  )
}

export default Form

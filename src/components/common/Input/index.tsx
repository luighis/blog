import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: 1px solid red;
  }
`

export const Textarea = styled(Input)`
  resize: vertical;
  min-height: 100px;
`

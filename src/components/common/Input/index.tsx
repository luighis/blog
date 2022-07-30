import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.white02};
  border-radius: 4px;
  font-family: inherit;
  font-size: 14px;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.purple};
  }
`

export const Textarea = styled(Input)`
  resize: vertical;
  min-height: 100px;
`

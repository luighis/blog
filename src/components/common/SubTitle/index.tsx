import styled from 'styled-components'

interface SubTitleProps {
  secondary?: boolean
}

const SubTitle = styled.h3<SubTitleProps>`
  color: ${({ theme, secondary }) => (secondary ? theme.colors.purple : theme.colors.white01)};
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
`

export default SubTitle

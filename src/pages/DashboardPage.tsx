import Title from '../components/common/Title'
import styled from 'styled-components'

const DashboardPageContainer = styled.section`
  background-color: #fff;
`

const DashboardPage = () => (
  <DashboardPageContainer>
    <Title>Dashboard</Title>
  </DashboardPageContainer>
)

export default DashboardPage

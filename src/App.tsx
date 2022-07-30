import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'

import Router from './router'
import MainContainer from './components/layout/MainContainer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MainContainer>
        <Router />
      </MainContainer>
    </BrowserRouter>
  )
}

export default App

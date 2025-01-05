import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import styled from 'styled-components'

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Outlet />
    </AppContainer>
  )
}

export default App

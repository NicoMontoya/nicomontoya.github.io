import React from 'react'
import styled from 'styled-components'
import Globe from '../components/Globe'
import Stars from '../components/Stars'

const GlobeViewContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
`

function GlobeView() {
  return (
    <GlobeViewContainer>
      <Stars />
      <Globe fullscreen={true} />
    </GlobeViewContainer>
  )
}

export default GlobeView

import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Globe from '../components/Globe'
import Stars from '../components/Stars'

const HomeContainer = styled.div`
  background: transparent;
  min-height: 200vh;
  position: relative;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Header = styled.div`
  text-align: center;
  padding-top: 8rem;
  margin-bottom: 16rem;
`

const GlobeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20rem 0;
`

const GlobeContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`

const GlobeLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
`

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #333333;
  text-shadow: none;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #444444;
  text-shadow: none;
  font-weight: 300;
  font-style: italic;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const IntroText = styled(motion.p)`
  font-size: 1.2rem;
  color: #444444;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
  text-align: center;
`

function Home() {
  return (
    <HomeContainer>
      <Stars />
      <Header>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nico
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Curious Wanderer
        </Subtitle>
        <IntroText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Welcome...

        
        </IntroText>
      </Header>
      <GlobeSection>
        <GlobeContainer>
          <Globe />
          <GlobeLink to="/globe" aria-label="View fullscreen globe" />
        </GlobeContainer>
      </GlobeSection>
    </HomeContainer>
  )
}

export default Home

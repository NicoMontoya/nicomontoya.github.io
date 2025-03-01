import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Globe from '../components/Globe'

const HomeContainer = styled.div`
  background: transparent;
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    height: calc(100vh - 150px);
    padding: 0 1rem;
  }
`

const Content = styled.div`
  text-align: center;
  max-width: 800px;
  position: relative;
  z-index: 1;
  padding: 0 1rem;
`

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #ffffff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #f0f0f0;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  font-weight: 300;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

function Home() {
  return (
    <HomeContainer>
      <Globe />
      <Content>
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
          Curious Wonderer
        </Subtitle>
      </Content>
    </HomeContainer>
  )
}

export default Home

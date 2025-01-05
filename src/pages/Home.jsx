import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HomeContainer = styled.div`
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

const Watermark = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23e1e1e1' d='M256 32c-123.7 0-224 100.3-224 224s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm0 64c88.2 0 160 71.8 160 160s-71.8 160-160 160S96 344.2 96 256 167.8 96 256 96zm0 32c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm32 128c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-96 0c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64zm160 0c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zm-128 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z'/%3E%3Cpath fill='%23e1e1e1' d='M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.629 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.371 187.621 512 256 512s132.668-26.629 181.02-74.98C485.371 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32s224 100.486 224 224-100.486 224-224 224z'/%3E%3Ccircle fill='%23e1e1e1' cx='256' cy='256' r='160'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.15;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
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
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #666;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

function Home() {
  return (
    <HomeContainer>
      <Watermark />
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nico Montoya
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

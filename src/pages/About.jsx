import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Stars from '../components/Stars'

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Section = styled(motion.div)`
  margin-bottom: 2rem;
`

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333333;
  text-shadow: none;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`

const Text = styled.p`
  color: #444444;
  text-shadow: none;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`

function About() {
  return (
    <>
      <Stars />
      <AboutContainer>
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>About Me</Title>
          <Text>
            The more I learn, the more I realize how much there is to explore. Certainty is rare, but that's what makes progress exciting. To me, data is the best tool for making sense of the world—it helps us see where we've been and where we're going, like a map that gets clearer over time.
          </Text>
          <Text>
            I'm always chasing interesting questions, and my projects reflect that curiosity. Take a look around -- 
          </Text>
          <Text>
            Thanks for being here :)
          </Text>
        </Section>
      </AboutContainer>
    </>
  )
}

export default About

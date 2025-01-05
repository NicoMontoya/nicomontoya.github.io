import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

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
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`

const Text = styled.p`
  color: #444;
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
    <AboutContainer>
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>About Me</Title>
        <Text>
          "It is only once you give up on absolute truth and certainty that you can make progress". The more I learn the more I don't know. There are exceptions to just about every rule in the book. Yet progress is necessary. Data is the best, and fastest way I know to increase progress. It is hard to know where to go if you forget where you have been. To me, data is fascinating, because it gives us a way to build maps in any domain. The more complete the map becomes, the better direction you have.
        </Text>
        <Text>
          My projects are based on domains that I am interested in. I am constantly seeking answers to questions that are interesting to me. Check them out!
        </Text>
        <Text>
          Thanks for being here :)
        </Text>
      </Section>
    </AboutContainer>
  )
}

export default About

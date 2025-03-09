import React from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from 'react-icons/fa6'
import Stars from '../components/Stars'

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333333;
  text-shadow: none;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`

const Text = styled(motion.p)`
  color: #444444;
  text-shadow: none;
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`

const Link = styled(motion.a)`
  font-size: 1.5rem;
  color: #666666;
  text-shadow: none;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    animation: ${shake} 0.5s ease;
    color: transparent;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

function Contact() {
  return (
    <>
      <Stars />
      <ContactContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </Title>
      <Text
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Feel free to reach out for collaborations or opportunities
      </Text>
      <LinksContainer>
        <Link
          href="https://github.com/NicoMontoya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nico-montoya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="mailto:nicomontoya@hey.com"
        >
          <FaEnvelope />
        </Link>
        <Link
          href="https://x.com/n_montoy03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </Link>
      </LinksContainer>
      </ContactContainer>
    </>
  )
}

export default Contact

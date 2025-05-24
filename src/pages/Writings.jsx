import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import Stars from '../components/Stars'

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`

const WritingsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
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

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const ArticleLink = styled(Link)`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(135, 206, 235, 0.15);
    border-color: rgba(255, 255, 255, 0.2);
    animation: ${shake} 0.5s ease;
    h3 {
      background: linear-gradient(45deg, #ff69b4, #87CEEB);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

const ArticleTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333333;
  text-shadow: none;
`

const ArticleExcerpt = styled.p`
  color: #444444;
  text-shadow: none;
  font-size: 1rem;
  line-height: 1.6;
`

function Writings() {
  return (
    <>
      <Stars />
      <WritingsContainer>
      <Title>Writings</Title>
      <ArticleList>
        <ArticleLink to="/writings/tennis">
          <ArticleTitle>Lessons From Tennis</ArticleTitle>
          <ArticleExcerpt>
            Exploring the parallels between tennis and life, from mental toughness to strategic thinking.
          </ArticleExcerpt>
        </ArticleLink>
        <ArticleLink to="/writings/leadership">
          <ArticleTitle>On Leadership</ArticleTitle>
          <ArticleExcerpt>
            Reflections on authentic leadership and building meaningful connections in the modern world.
          </ArticleExcerpt>
        </ArticleLink>
        <ArticleLink to="/writings/antifilters">
          <ArticleTitle>Anti Filters</ArticleTitle>
          <ArticleExcerpt>
            Rejection is a signal, not a setback.
          </ArticleExcerpt>
        </ArticleLink>
      </ArticleList>
      </WritingsContainer>
    </>
  )
}

export default Writings

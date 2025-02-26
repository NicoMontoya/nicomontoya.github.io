import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ArticleContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Content = styled.div`
  color: #444;
  font-size: 1.1rem;
  line-height: 1.8;

  p {
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

function TennisArticle() {
  return (
    <ArticleContainer>
      <Title>Lessons From Tennis</Title>
      <Content>
        <p>
          Tennis, beyond its physical demands, is a profound teacher of life's most valuable lessons. The court becomes a microcosm of life's challenges, victories, and setbacks, each match a story of personal growth and resilience.
        </p>

        <h2>The Mental Game</h2>
        <p>
          Perhaps the most striking parallel between Tennis and life lies in the mental aspect of the game. Every point is a fresh start, requiring one to leave behind previous mistakes and focus entirely on the present moment. This ability to reset and maintain composure under pressure is invaluable both on and off the court.
        </p>

        <h2>Adaptability</h2>
        <p>
          Success in Tennis requires constant adaptation. Wind conditions change, opponents adjust their tactics, and our own game fluctuates. The ability to read situations quickly and adjust accordingly is crucial. This adaptability translates directly to navigating life's ever-changing landscapes.
        </p>

        <h2>Accountability</h2>
        <p>
          In singles, you are all alone. There's no team to rely on, no substitutions possible. This solitude teaches us about self-reliance and taking full responsibility for our actions and decisions. Every point won or lost is a direct result of our choices and execution.
        </p>

        <h2>The Journey of Improvement</h2>
        <p>
          Progress in Tennis, like in life, is rarely linear. It's never perfect. It's never final. It's continuous refinement. The process teaches us patience, persistence, and the value of deliberate practice. Tennis teaches to love the journey.
        </p>

        <p>
          These lessons from Tennis have extended far beyond the tennis court. I love the sport.  I will forever be grateful to Tennis.
        </p>
      </Content>
    </ArticleContainer>
  )
}

export default TennisArticle

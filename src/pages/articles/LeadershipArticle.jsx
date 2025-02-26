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

function LeadershipArticle() {
  return (
    <ArticleContainer>
      <Title>On Leadership</Title>
      <Content>
        <p>
          Leadership, to me, transcends traditional hierarchies and management techniques. It's about creating an environment where others can flourish, innovate, and achieve their fullest potential.
        </p>

        <h2>Authentic Connection</h2>
        <p>
          True Leadership begins with authentic connection. In an increasingly digital world, the ability to forge genuine relationships becomes not just valuable, but essential. Leaders must create spaces where vulnerability is welcomed and trust can flourish.
        </p>

        <h2>Leading By Example</h2>
        <p>
          The most impactful leadership doesn't come from directives or mandates, but from consistent demonstration of the values and behaviors we wish to see in others. When leaders embody their principles, they create a natural gravitational pull that inspires others to follow.
        </p>

        <h2>Comfort With the Uncomfortable</h2>
        <p>
          Leadership requires comfort with ambiguity. In a world of rapid change and increasing complexity, the ability to navigate uncertainty while maintaining clear vision becomes crucial. Leaders must balance confidence with humility, knowing when to stand firm and when to adapt.
        </p>

        <h2>Growth Mindset</h2>
        <p>
          Leaders create cultures of continuous learning. They understand that growth isn't just about acquiring new skills or accomplishing tasks, but about fostering an environment where experimentation is encouraged and failure is seen as a stepping stone to success.
        </p>

        <h2>Catapult</h2>
        <p>
        Most importantly for me, Leaders don't seek the spotlight—they create it for others. The best leadership isn't about being the loudest voice in the room but about empowering those around you to thrive. When a leader becomes invisible, their impact is felt through the success, confidence, and growth of their team.
        </p>

        <p>
          Leadership isn't a title or accolade but a continuous journey of growth, learning, and service to others. It's about creating influence that extend far beyond our immediate sphere of influence, contributing to positive change in ways we might never fully see.
        </p>
      </Content>
    </ArticleContainer>
  )
}

export default LeadershipArticle

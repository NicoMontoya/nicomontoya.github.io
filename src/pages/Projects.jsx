import React from 'react'
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

const ProjectsContainer = styled.div`
  padding: 2rem 0;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333333;
  text-shadow: none;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`

const ProjectCard = styled(motion.div)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 3rem;
  
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    animation: ${shake} 0.5s ease;
  }

  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
`

const ProjectTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333333;
  text-shadow: none;
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const ProjectDescription = styled.p`
  color: #444444;
  text-shadow: none;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`

const TechStack = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`

const TechTag = styled.span`
  color: #666666;
  text-shadow: none;
  font-size: 0.9rem;
  font-weight: 300;
  
  &:not(:last-child)::after {
    content: '•';
    margin-left: 1rem;

    @media (max-width: 768px) {
      margin-left: 0.5rem;
    }
  }

  ${ProjectCard}:hover & {
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const projects = [
  {
    title: "Data Science Questions",
    description: "Notebooks that contain Data Science questions and (some) answers from DataInterviewQs.com",
    tech: ["Jupiter", "Python", "Pandas"]
  },
  {
    title: "99 Problems",
    description: "The purpose of this project is to help Lambda School generate ideas for their students to work on. As Lambda School continues to grow, it has become difficult to keep up with idea generation for projects. That is where we come in. Our team has made use of leading edge technology in text generation to help create company descriptions. Using a data set of 150,000 company descriptions and training on top of OpenAI’s GPT-2 neural network, we were able to generate company descriptions that have the potential to be used by people in the real world.",
    tech: ["React", "Python", "MongoDB", "LLM"]
  },
  {
    title: "Helping Well",
    description: "Using NLP to match users with relevant non-profits in their area",
    tech: ["React", "Node.js", "Python"]
  },
  {
    title: "Should We Fix the Wells?",
    description: "a competition using a dataset describing water wells in Tanzania. The goal was to build the best predictive model for classifying the water wells in Tanzania. There were three classes of wells, functioning, non-functioning, and functioning but needs repairs. Using some machine learning techniques, and data analysis, this post will go through my process of fine tuning a model and thought process to help improve a real world problem.",
    tech: ["Python", "Pandas", "Regression", "ML"]
  },
  {
    title: "The Lefty Myth",
    description: "Small study looking at the top pros in tennis to try and decipher if being left handed really is an outsized advantage.",
    tech: ["Python", "Pandas"]
  },
  {
    title: "Digging Into Blue Gold",
    description: "Research done for the University of Notre Dame Endowment to see if water is a good investment opportunity.",
    tech: ["Research", "Presentation"]
  }
]

function Projects() {
  return (
    <>
      <Stars />
      <ProjectsContainer>
      <Title>Projects</Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.tech.map((tech, i) => (
                <TechTag key={i}>{tech}</TechTag>
              ))}
            </TechStack>
          </ProjectCard>
        ))}
      </ProjectGrid>
      </ProjectsContainer>
    </>
  )
}

export default Projects

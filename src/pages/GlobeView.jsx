import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Globe from '../components/Globe'
import Stars from '../components/Stars'

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`

const GlobeViewContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
`

const YearSelectorContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 10;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    padding: 0.3rem 0.7rem;
  }
`

const YearDropdown = styled.select`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 1.5rem;
  
  &:hover {
    animation: ${shake} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  option {
    background-color: #1a1a1a;
    color: white;
  }
`

const YearLabel = styled.span`
  color: white;
  margin-right: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    animation: ${shake} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const DropdownArrow = styled.div`
  position: absolute;
  right: 1rem;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid white;
  pointer-events: none;
  transition: transform 0.3s ease;
  
  ${YearSelectorContainer}:hover & {
    transform: translateY(2px);
  }
`

function GlobeView() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  
  // Generate years from current year down to 1993
  const years = [];
  for (let year = currentYear; year >= 1993; year--) {
    years.push(year);
  }
  
  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };
  
  return (
    <GlobeViewContainer>
      <Stars />
      <YearSelectorContainer>
        <YearLabel>Year</YearLabel>
        <YearDropdown value={selectedYear} onChange={handleYearChange}>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </YearDropdown>
        <DropdownArrow />
      </YearSelectorContainer>
      <Globe fullscreen={true} year={selectedYear} />
    </GlobeViewContainer>
  )
}

export default GlobeView

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

const glow = keyframes`
  0% { box-shadow: 0 0 10px rgba(255, 105, 180, 0.3), 0 0 20px rgba(135, 206, 235, 0.2); }
  50% { box-shadow: 0 0 15px rgba(255, 105, 180, 0.5), 0 0 30px rgba(135, 206, 235, 0.3); }
  100% { box-shadow: 0 0 10px rgba(255, 105, 180, 0.3), 0 0 20px rgba(135, 206, 235, 0.2); }
`

const YearSelectorContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 10;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 0.8rem 1.2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 105, 180, 0.3), 0 0 20px rgba(135, 206, 235, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    animation: ${glow} 2s infinite;
  }
  
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    padding: 0.6rem 1rem;
  }
`

const YearDropdown = styled.select`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.3rem 2rem 0.3rem 0.5rem;
  min-width: 100px;
  text-align: center;
  
  &:hover {
    animation: ${shake} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  &:focus {
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  option {
    background-color: rgba(26, 26, 26, 0.95);
    color: white;
    font-size: 1rem;
    padding: 10px;
  }
`

const YearLabel = styled.span`
  color: white;
  margin-right: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  
  &:hover {
    animation: ${shake} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const DropdownArrow = styled.div`
  position: absolute;
  right: 1.2rem;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(255, 255, 255, 0.8);
  pointer-events: none;
  transition: transform 0.3s ease, border-top-color 0.3s ease;
  
  ${YearSelectorContainer}:hover & {
    transform: translateY(3px);
    border-top-color: white;
  }
`

// Custom styled component for the dropdown options container
const StyledYearOptions = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  z-index: 20;
  display: ${props => props.$isOpen ? 'block' : 'none'};
  width: 120px;
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`

const YearOption = styled.div`
  padding: 0.7rem 1rem;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  
  &:hover {
    background: linear-gradient(45deg, rgba(255, 105, 180, 0.2), rgba(135, 206, 235, 0.2));
    color: white;
  }
  
  ${props => props.$isSelected && `
    background: linear-gradient(45deg, rgba(255, 105, 180, 0.3), rgba(135, 206, 235, 0.3));
    font-weight: bold;
  `}
  
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`

const SelectedYear = styled.div`
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  min-width: 100px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    animation: ${shake} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

function GlobeView() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Generate years from current year down to 1993
  const years = [];
  for (let year = currentYear; year >= 1993; year--) {
    years.push(year);
  }
  
  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  // Close dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (isDropdownOpen && !e.target.closest('.year-selector')) {
      setIsDropdownOpen(false);
    }
  };
  
  // Add event listener for clicking outside
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);
  
  return (
    <GlobeViewContainer>
      <Stars />
      <YearSelectorContainer className="year-selector">
        <YearLabel>Year</YearLabel>
        <div style={{ position: 'relative' }}>
          <SelectedYear onClick={toggleDropdown}>
            {selectedYear}
          </SelectedYear>
          <DropdownArrow />
          
          <StyledYearOptions $isOpen={isDropdownOpen}>
            {years.map(year => (
              <YearOption 
                key={year} 
                $isSelected={year === selectedYear}
                onClick={() => handleYearSelect(year)}
              >
                {year}
              </YearOption>
            ))}
          </StyledYearOptions>
        </div>
      </YearSelectorContainer>
      <Globe fullscreen={true} year={selectedYear} />
    </GlobeViewContainer>
  )
}

export default GlobeView

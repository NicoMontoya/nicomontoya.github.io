import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 4rem;
  border-bottom: 1px solid #e1e1e1;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;
    margin-bottom: 2rem;
  }
`

const Logo = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #1a1a1a;
  transition: color 0.3s ease;
  z-index: 2;

  &:hover {
    animation: ${shake} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const NavLink = styled(Link)`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${props => props.$isActive ? '#1a1a1a' : '#666'};
  transition: color 0.3s ease;

  &:hover {
    animation: ${shake} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

function Navbar() {
  const location = useLocation()

  return (
    <Nav>
      <Logo to="/">NM</Logo>
      <NavLinks>
        <NavLink to="/" $isActive={location.pathname === '/'}>Home</NavLink>
        <NavLink to="/about" $isActive={location.pathname === '/about'}>About</NavLink>
        <NavLink to="/projects" $isActive={location.pathname === '/projects'}>Projects</NavLink>
        <NavLink to="/writings" $isActive={location.pathname.includes('/writings')}>Writings</NavLink>
        <NavLink to="/contact" $isActive={location.pathname === '/contact'}>Contact</NavLink>
      </NavLinks>
    </Nav>
  )
}

export default Navbar

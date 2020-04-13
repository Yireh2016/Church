import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useLocation } from 'react-router-dom'

import { crown } from '../svgIcons/svgIcons'

import { Link } from 'react-router-dom'

const Main = ({ children }) => {
  const [isNavColor, setIsNavColor] = useState(false)
  let location = useLocation()
  useEffect(() => {
    if (location.pathname.match(/nosotros/)) {
      setIsNavColor(true)
      return
    }
    setIsNavColor(false)
  }, [location])

  return (
    <Layout>
      <NavBackground isNavColor={isNavColor}>
        <Crown id="Crown">{crown}</Crown>
        <Nav id="Nav">
          <ul>
            <li>
              <Link to="/">Iglesia</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>Servicios</li>
            <li>Ministerios</li>
            <li>Contactanos</li>
          </ul>
        </Nav>
      </NavBackground>

      {children}
    </Layout>
  )
}
export default Main

const Layout = styled.div`
  position: relative;
  display: block;
  margin: auto;
  height: 100vh;
  width: 100vw;
  max-height: 1000px;
  max-width: 1500px;
  overflow: hidden;
`

const NavBackground = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 1;
  background: ${({ theme, isNavColor }) =>
    isNavColor ? theme.color.violet : 'transparent'};
`

const Nav = styled.nav`
  width: 600px;
  background: transparent;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    li {
      list-style-type: none;

      font-family: ${({ theme }) => theme.font};
      color: ${({ theme }) => theme.color.dorado};

      a {
        color: ${({ theme }) => theme.color.dorado} !important;
        text-decoration: none;
        text-decoration-color: ${({ theme }) => theme.color.dorado} !important;
      }
    }
  }
`

const Crown = styled.div`
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.color.dorado};

  margin: 0px 0 0 30px;
  width: 100px;
`

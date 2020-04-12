import React from "react";
import styled from "styled-components";

import { crown } from "../svgIcons/svgIcons";

const Layout = styled.div`
  position: relative;
  display: block;
  margin: auto;
  height: 100vh;
  width: 100vw;
  max-height: 1000px;
  max-width: 1500px;
  overflow: hidden;
`;
const Nav = styled.nav`
  position: absolute;
  top: 15px;
  right: 0;
  width: 600px;
  height: 100px;
  background: transparent;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    li {
      list-style-type: none;

      font-family: ${({ theme }) => theme.font};
      color: ${({ theme }) => theme.color.dorado};
    }
  }
`;

const Crown = styled.div`
  position: absolute;
  top: 30px;
  left: 5%;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.color.dorado};
  width: 100px;
  height: 80px;
`;

export default ({ children }) => (
  <Layout>
    <Crown id="Crown">{crown}</Crown>
    <Nav id="Nav">
      <ul>
        <li>Nosotros</li>
        <li>Servicios</li>
        <li>Ministerios</li>
        <li>Contactanos</li>
      </ul>
    </Nav>
    {children}
  </Layout>
);

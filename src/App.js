import React from "react";
import { ThemeProvider } from "styled-components";

import Home from "./views/Home";
import About from "./views/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainLayout from "./layouts/Main";

import "./styles.css";

const theme = {
  color: {
    dorado: "#EDB955",
    blanco: "#f2f2f2",
    violet: "rgba(36, 23, 54, 0.89)"
  },
  font: "Montserrat, sans-serif"
};

export default () => (
  <>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/nosotros">
            <MainLayout>
              <About />
            </MainLayout>
          </Route>
          <Route path="/">
            <MainLayout>
              <Home />
            </MainLayout>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </>
);

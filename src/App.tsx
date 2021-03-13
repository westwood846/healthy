import React from "react";
import { Switch, Route } from "react-router-dom";
import { Meals } from "./pages/Meals";
import { Navigation } from "./pages/Navigation";
import { Search } from "./pages/Search";
import { Starred } from "./pages/Starred";
import { Settings } from "./pages/Settings";
import { TopBar } from "./pages/TopBar";
import styled from "styled-components";

const SkipMain = styled.a`
  left: -999px;
  position: absolute;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -999;
  &:focus,
  &:active {
    color: #fff;
    background-color: #000;
    left: auto;
    top: auto;
    width: 30%;
    height: auto;
    overflow: auto;
    margin: 10px 35%;
    padding: 5px;
    border-radius: 15px;
    border: 4px solid yellow;
    text-align: center;
    font-size: 1.2em;
    z-index: 999;
  }
`;

export const App: React.FC = () => {
  return (
    <>
      {/* <a href="#main" style={{ visibility: "hidden" }}> */}
      <SkipMain href="#main">Jump to Main Content</SkipMain>
      <Navigation />
      <TopBar />
      <Switch>
        <Route path="/" exact={true}>
          <Search />
        </Route>
        <Route path="/starred">
          <Starred />
        </Route>
        <Route path="/meals">
          <Meals />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </>
  );
};

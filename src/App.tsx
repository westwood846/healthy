import React from "react";
import { Switch, Route } from "react-router-dom";
import { Meals } from "./modules/Meals";
import { Navigation } from "./modules/Navigation";
import { Search } from "./modules/Search";
import { Starred } from "./modules/Starred";

export const App: React.FC = () => {
  return (
    <>
      <Switch>
        {/* <Route path="/about">
            <Search />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
        <Route path="/" exact={true}>
          <Search />
        </Route>
        <Route path="/starred">
          <Starred />
        </Route>
        <Route path="/meals">
          <Meals />
        </Route>
      </Switch>
      <Navigation />
    </>
  );
};

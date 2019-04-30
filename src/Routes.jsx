import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./views/HomePage";

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true
  }
];

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route, index) => (
        <Route {...route} key={index} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;

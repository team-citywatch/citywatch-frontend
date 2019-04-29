import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./views/HomePage";
import ReportsPage from "./views/ReportsPage";

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/reports-feed",
    component: ReportsPage,
    exact: true
  }
];

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <Route {...route} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;

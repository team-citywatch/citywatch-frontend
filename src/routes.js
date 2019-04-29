import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import LoginComponent from './components/LoginComponent';

const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default routes;

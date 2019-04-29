import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginComponent from './components/LoginComponent';
import ReportForm from './components/ReportForm';
import ReportsPage from './components/ReportsPage';

const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginComponent} />
          <Route path="/report" exact component={ReportForm} />
          <Route path="/reports-feed" exact component={ReportsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default routes;

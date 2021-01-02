import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RoutePath } from './pages/routes';
import { Dashboard } from './pages';

function App() {
  return (
    <Switch>
      <Route path={RoutePath.DASHBOARD} component={Dashboard} />
      <Redirect to={RoutePath.DASHBOARD} />
    </Switch>
  );
}

export default App;

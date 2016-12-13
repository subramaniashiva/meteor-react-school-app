import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AppContainer from '../ui/App.jsx';
import BoardContainer from '../ui/Board.jsx';


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path=":id" component={BoardContainer} />
      
    </Route>

  </Router>
);

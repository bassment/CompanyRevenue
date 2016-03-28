import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import CompanyContainer from './containers/CompanyContainer';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/company" component={CompanyContainer} />
  </Route>
);

export default routes;

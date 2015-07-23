import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import App from './app';

var routes = (
  <Router history={history}>
    <Route path="/" component={App}></Route>
  </Router>
);

ReactDom.render(
  routes,
  document.getElementById("app")
);

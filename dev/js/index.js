import "@babel/polyfill";
// import "@babel/plugin-proposal-class-properties";
import "core-js/modules/es6.promise";
import "core-js/modules/es7.array.includes";
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components';
// import Admin_Dashboard from './containers/admin_dashboard';
// import Create_Publication from './containers/create_publication';
// import Publications from './containers/publications';
import AboutUs from './components/aboutus';
import Computations from './components/computation';
import Computations2 from './components/computation2';
import Welcome from './components/welcome';

import store from './store';
import createBrowserHistory from "history/createBrowserHistory";
const appHistory = createBrowserHistory();
import test from './components/test';
require('../styles/bootstrap.min.css');
require('../styles/index.css');

ReactDOM.render(
  <BrowserRouter>
      <Router history={appHistory}>
        <Switch>
          <Provider store={store}>
               <Route exact path={'/'} component={App} />
               <Route path={'/welcome'} component={Welcome} />
               <Route path={'/computations'} component={Computations} />
               <Route path={'/aboutus'} component={AboutUs} />
               <Route path={'/welcome'} component={Welcome} />
               <Route path={'/computation2'} component={Computations2} />
          </Provider>
        </Switch>
      </Router>
   </BrowserRouter>,
 document.getElementById('root')
);

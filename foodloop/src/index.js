import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.scss';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import LoginAs from './pages/LoginAs';
import Subscribe from './pages/SubscribePage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/About" component={About} />
      <Route path="/Login" component={Login} />
      <Route path="/LoginAs" component={LoginAs} />
      <Route path="/Subscribe" component={Subscribe} />
      {/* <Route component={Pagina404} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
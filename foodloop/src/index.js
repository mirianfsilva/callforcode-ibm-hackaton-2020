import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.scss';
import Home from './pages/Home';
// import Login from './pages/Login';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      {/* <Route path="/login" component={Login} /> */}
      {/* <Route component={Pagina404} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.scss';
import Home from './pages/Home';
import About from './pages/About';
// import Login from './pages/Login';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/About" component={About} />
      {/* <Route component={Pagina404} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
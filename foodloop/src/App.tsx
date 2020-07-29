import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';


class App extends Component {
    render() {
/*
<BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/" component={Our p} />
      <Route path="/" component={a} />
    </Switch>
  </BrowserRouter>,
*/
        return (
            <div className="App">
                <Menu></Menu>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;

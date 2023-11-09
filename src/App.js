import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => {

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/products" />} />
          <Route path="/products" exact component={Home} />
          <Route path="/products/search" exact component={Home} />
          <Route path="/products/search/:month" exact component={Home} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;

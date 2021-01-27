import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// pages
import HomePage from './views/home';
import ProductPage from './views/productPage';
import CartPage from './views/cart';

// components
import NavBar from './components/navBar';


function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/productPage">
            <ProductPage />
          </Route>
          <Route exact path="/cartPage">
            <CartPage />
          </Route>
          <Route path="*">
            <Redirect to='/' />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

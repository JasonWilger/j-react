import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// pages
import HomePage from './views/home';
import CartPage from './views/cart';

// components
import NavBar from './components/navBar';
import Footer from './components/footer';
import Order from './views/order';
import Payment from './components/payment';
import Completed from './components/completed';




function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/completed" component={Completed} />
          <Route path="*">
            <Redirect to='/' />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

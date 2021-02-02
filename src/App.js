import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// pages
import HomePage from './views/home';
import CartPage from './views/cart';

// components
import NavBar from './components/navBar';
import Footer from './components/footer';



function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={CartPage} />
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

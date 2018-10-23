import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Shop from './Components/Shop';
import Error from './Components/Error';
import ProductPage from './Components/ProductPage';
import MyAccount from './Components/MyAccount';
import ShoppingCart from './Components/ShoppingCart';

class App extends Component {
  render () {
    return (
        <BrowserRouter>

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/shop" component={Shop} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/myAccount" component={MyAccount} />
            <Route path="/shoppingCart" component={ShoppingCart} />
            <Route component={Error} />
          </Switch>

        </BrowserRouter>
    )
  }
}

export default App;
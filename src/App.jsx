import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import { BookStoreAppBar } from './layout'
import { WishListPage } from './wishList';
import { ShoppingCartPage } from './shoppingCart';
import { BookStorePage } from './bookStore';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
              <BookStoreAppBar />
          </header>
          <div className="content">
            <Route exact path="/" component={BookStorePage}></Route>
            <Route exact path="/wishlist" component={WishListPage} />
            <Route exact path="/shopping" component={ShoppingCartPage} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

// var styles = {

// };

export default App;

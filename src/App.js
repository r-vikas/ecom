import React from "react";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import Header from "./components/header/header.component";

const jackets = () => (
  <div>
    <h1>jackets</h1>
  </div>
);

const sneakers = () => (
  <div>
    <h1>sneakers</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/jackets" component={jackets} />
        <Route path="/sneakers" component={sneakers} />
      </Switch>
    </div>
  );
}

export default App;

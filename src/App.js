import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const hats = (props) => (
  <div>
    <h1>Hats page</h1>
  </div>
);

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
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={hats} />
      <Route path="/jackets" component={jackets} />
      <Route path="/sneakers" component={sneakers} />
    
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route} 
from "react-router-dom"

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <h1>This is a checkout!</h1>
          </Route>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;

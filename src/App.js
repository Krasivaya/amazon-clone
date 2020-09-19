import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch}

function App() {
  return (
    // BEM
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;

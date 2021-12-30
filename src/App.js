import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FoodsDetails from "./components/FoodsDetails";
import About from "./components/About";
import Cart from "./components/Cart";
function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Home} exact></Route>
        <Route path="/food/:id" exact component={FoodsDetails}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/cart" exact component={Cart}></Route>
      </Router>
    </div>
  );
}

export default App;

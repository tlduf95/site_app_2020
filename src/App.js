import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";


function App() {

  return (
    <TransitionGroup>
          <CSSTransition timeout={3000} classNames="fade">
    <HashRouter>
    <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
    </CSSTransition>
        </TransitionGroup>
  );
}
export default App;

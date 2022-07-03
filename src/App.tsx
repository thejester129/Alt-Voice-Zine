import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import Home from "./home/Home";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import Article from "./articles/Article";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./style/slideTransition.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppInner />
      </Router>
    </Provider>
  );
}

function AppInner() {
  const location = useLocation();
  const currentRoute = useSelector(
    (state: any) => state.navigation.currentRoute
  );
  const prevRoute = useSelector((state: any) => state.navigation.prevRoute);

  return (
    <TransitionGroup component="div">
      <CSSTransition
        key={currentRoute}
        timeout={{ enter: 500, exit: 500 }}
        classNames="pageSlider"
        mountOnEnter={false}
        unmountOnExit={true}
      >
        <div className={getTransitionDirection(prevRoute, currentRoute)}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/article/:issueNo">
              <Article />
            </Route>
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function getTransitionDirection(prevRoute: string, newRoute: string) {
  if (prevRoute === "" && newRoute.includes("/article")) {
    return "left";
  }
  if (newRoute === "") {
    return "right";
  }

  return "";
}

export default App;

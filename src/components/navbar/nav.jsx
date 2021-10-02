import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LinksPage from "../pages/LinksPage";
import '../../styles/nav.scss';

function nav() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
          </ul>
        </nav>
        <Switch>
           <Route exact path="/links">
            <LinksPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default nav;

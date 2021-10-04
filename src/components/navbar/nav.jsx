import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LinksPage from "../pages/LinksPage";
import VimPage from "../pages/VimPage";
import { SiVim } from "react-icons/si";
import "../../styles/nav.scss";

function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <SiVim />
                Home
              </Link>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
            <li>
              <Link to="/vim">Vim</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/vim">
            <VimPage />
          </Route>
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

export default Nav;

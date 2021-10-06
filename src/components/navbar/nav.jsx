import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Combo from "../pages/Combo";
import VimPage from "../pages/VimPage";
import { SiVim } from "react-icons/si";
import { GiPuzzle } from "react-icons/gi"
import "../../styles/nav.scss";

function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <SiVim /> Search
              </Link>
            </li>
            <li>
              <Link to="/combination"><div className="react-icon"><GiPuzzle /> Combos </div></Link>
            </li>
            <li>
              <Link to="/vim"><GiPuzzle /> Vim</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/vim">
            <VimPage />
          </Route>
          <Route exact path="/combination">
            <Combo />
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

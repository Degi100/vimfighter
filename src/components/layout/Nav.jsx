import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import VimPage from "../pages/VimPage";
import "../../styles/nav.scss";

function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
              Search
              </Link>
            </li>
            <li>
              <Link to="/register"><div className="react-icon"> Register </div></Link>
            </li>
            <li>
              <Link to="/vim"> Vim</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/vim">
            <VimPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;

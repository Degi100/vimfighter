import "./App.scss";
import "./styles/main.scss";
import Header from "./components/layout/Header";
import Bottom from "./components/layout/Bottom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import RegisterPage from "./components/pages/RegisterPage";
import VimPage from "./components/pages/VimPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
        <Bottom />
      </div>
    </Router>
  );
}

export default App;

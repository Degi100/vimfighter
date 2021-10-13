import "../../styles/nav.scss";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/vim">Vim</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

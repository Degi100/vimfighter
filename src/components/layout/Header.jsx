import Nav from "./Nav";
import "../../styles/header.scss";

const Header = () => {
  return (
    <div>
      <div className="header-bg"> </div>
      <div className="header">
        <Nav />
      </div>
    </div>
  );
};

export default Header;

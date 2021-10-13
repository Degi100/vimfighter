import Nav from "./Nav";
import "../../styles/header.scss";

const Header = () => {
  return (
    <div>
      <div className="header-img">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="header">
        <Nav />
      </div>
    </div>
  );
};

export default Header;

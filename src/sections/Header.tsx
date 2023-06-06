import { Heading, Button } from "../components";
import logo from "../img/my_name-32x32.png";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header__logo-box">
        <img className="header__logo" src={logo} alt="My Name Logo" />
      </div>

      <div className="header__text-box">
        <Heading primary>Outdoors is where life happens</Heading>
        <Button className="btn btn--white btn--animated" to="#grid">
          Discover our tours
        </Button>
      </div>
    </header>
  );
};

export default Header;

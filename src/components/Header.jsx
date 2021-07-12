import { Link } from "react-router-dom";
import home from "../assets/home.png";

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/">
        <img alt="Home" src={home} />
      </Link>
      <h1>NC-NEWS</h1>
    </header>
  );
};

export default Header;

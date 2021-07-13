import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import home from "../assets/home.png";

const Header = ({ defaultUser }) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  //console.log("Header.loggedInUser>>>", loggedInUser);
  //console.log("Header.defaultUser>>>", defaultUser);

  return (
    <header className="App-header">
      <Link to="/">
        <img alt="Home" src={home} className="HeaderImage" />
      </Link>
      <h1>NC-NEWS</h1>
      <Link to="/users">
        <div className="HeaderUser">
          <img
            alt="Logged in user"
            src={loggedInUser.avatar_url}
            className="UsersImage"
          />
          <p>{loggedInUser.username}</p>
          {loggedInUser.username != "<not logged in>" ? (
            <p
              onClick={() => {
                setLoggedInUser(defaultUser);
              }}
            >
              log out
            </p>
          ) : null}
        </div>
      </Link>
    </header>
  );
};

export default Header;

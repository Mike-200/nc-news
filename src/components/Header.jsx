import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import home from "../assets/home.png";
import edit from "../assets/edit.png";
import del from "../assets/garbage.png";

const Header = ({ defaultUser }) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <header className="App-header">
      <span>
        <Link to="/">
          <img alt="Home" src={home} />
        </Link>

        {/* <Link to="/add">
          <img alt="Add an acticle" src={add} />
        </Link> */}

        <Link to="/edit">
          <img alt="Edit an acticle" src={edit} />
        </Link>

        <Link to="/delete">
          <img alt="Delete an acticle" src={del} />
        </Link>
      </span>
      <h1>NC-NEWS</h1>
      <Link to="/users">
        <span className="HeaderUser">
          <span>{loggedInUser.username} </span>
          <img
            alt="Logged in user"
            src={loggedInUser.avatar_url}
            className="UsersImage"
          />
          {loggedInUser.username !== "<not logged in>" ? (
            [
              <p
                onClick={() => {
                  setLoggedInUser(defaultUser);
                }}
              >
                --log out--
              </p>,
            ]
          ) : (
            <p>Go to login page</p>
          )}
        </span>
      </Link>
    </header>
  );
};

export default Header;

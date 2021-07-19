import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import home from "../assets/icons/home.png";
import edit from "../assets/icons/edit.png";
import del from "../assets/icons/garbage.png";

const Header = ({ defaultUser }) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <header className="App-header">
      <div>
        <span className="HeaderImage">
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
      </div>
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
            <div>
              <p
                onClick={() => {
                  setLoggedInUser(defaultUser);
                }}
              >
                --log out--
              </p>
            </div>
          ) : (
            <p>Go to login page</p>
          )}
        </span>
      </Link>
    </header>
  );
};

export default Header;

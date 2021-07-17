import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Home = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="App">
      <h2 className="TitleCard">Welcome to NC-NEWS</h2>
      <main>
        <div className="Home__Cards">
          <Link to="/articles">
            <p>Browse articles</p>
          </Link>
        </div>
        {loggedInUser.username === "<not logged in>"
          ? [
              <div className="Home__Cards">
                <Link to="/users">
                  <p>Login, to add articles and comments</p>
                </Link>
              </div>,
            ]
          : null}
        <div className="Home__Cards">
          <Link to="/information">
            <p>Information</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;

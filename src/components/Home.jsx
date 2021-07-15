import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Home = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="App">
      <h2 className="TitleCard">Welcome to NC-NEWS</h2>
      <main>
        <div className="ResultsCard">
          <Link to="/articles">
            <p>Browse articles</p>
          </Link>
        </div>
        {loggedInUser.username === "<not logged in>"
          ? [
              <p>-or-</p>,
              <div className="ResultsCard">
                <Link to="/users">
                  <p>Login, to add articles and comments</p>
                </Link>
              </div>,
            ]
          : null}
      </main>
    </div>
  );
};

export default Home;

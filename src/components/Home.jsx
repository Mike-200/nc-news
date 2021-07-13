import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h2 className="TitleCard">Welcome to NC-NEWS</h2>
      <div className="ResultsCard">
        <Link to="/users">
          <p>Login, to add articles and comments</p>
        </Link>
      </div>
      <p>-or-</p>
      <div className="ResultsCard">
        <Link to="/articles">
          <p>Just browse the articles</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;

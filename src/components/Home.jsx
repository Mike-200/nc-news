import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Northcoders articles and associated comments</p>
      <p>Enter username and password</p>

      <Link to="/articles">
        <button>View articles</button>
      </Link>
    </div>
  );
};

export default Home;

import { useContext, useEffect, useState } from "react";
import { getAllUsers, getLoggedInUser } from "../utils/utils";
import { UserContext } from "../contexts/User";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  //console.log("Users.loggedInUser>>>", loggedInUser);

  useEffect(() => {
    setIsLoading(true);
    getAllUsers()
      .then((apiUsers) => {
        setUsers(apiUsers);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  const login = (username) => {
    console.log(username);
    // now get all user details from the api
    getLoggedInUser(username).then((apiUser) => {
      setLoggedInUser(apiUser);
    });
  };

  if (isLoading) {
    return (
      <div>
        <h2>Loading data...</h2>
      </div>
    );
  }

  return (
    <div>
      <h1 className="TitleCard">Select your username</h1>
      <ul>
        {users.map((user) => {
          return (
            //         <Link to={`/users/${user.username}`}>
            <li
              key={user.username}
              className="ResultsCard"
              onClick={() => {
                login(user.username);
              }}
            >
              {/* <img alt="Home" src={user.avatar_url} className="UsersImage" /> */}
              <div>
                {/* <p>{user.name}</p> */}
                <p>{user.username}</p>
                {console.log("line 58 user", user)}
                {user.username === loggedInUser.username
                  ? [
                      <h3>Logged in</h3>,
                      <Link to="/">
                        <button>Back to home screen</button>
                      </Link>,
                      <p> </p>,
                    ]
                  : null}
              </div>
            </li>
            //       </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;

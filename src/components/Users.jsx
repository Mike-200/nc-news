import { useContext, useEffect, useState } from "react";
import { getAllUsers, getLoggedInUser } from "../utils/utils";
import { UserContext } from "../contexts/User";

const Users = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { setLoggedInUser } = useContext(UserContext);

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
      <h1 className="TitleCard">Existing users</h1>
      <ul>
        {users.map((user) => {
          return (
            //         <Link to={`/users/${user.username}`}>
            <li
              key={user.username}
              className="UsersCard"
              onClick={() => {
                login(user.username);
              }}
            >
              {/* <img alt="Home" src={user.avatar_url} className="UsersImage" /> */}
              <div className="UsersText">
                {/* <p>{user.name}</p> */}
                <p>{user.username}</p>
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

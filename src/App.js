import "./App.css";

import { Switch, Route } from "react-router-dom";
import { useState } from "react";

import { UserContext } from "./contexts/User";

import Header from "./components/Header";
import Home from "./components/Home";
import Users from "./components/Users";
import Articles from "./components/Articles";
import ArticleDetails from "./components/ArticleDetails";
import Comments from "./components/Comments";
import Edit from "./components/Edit";
import Delete from "./components/Delete";

function App() {
  const defaultUser = {
    username: "<not logged in>",
    avatar_url:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "<not logged in>",
  };

  const [loggedInUser, setLoggedInUser] = useState(defaultUser);

  // console.log("App.loggedInUser>>>", loggedInUser);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="App">
        <Header defaultUser={defaultUser} />

        <Switch>
          <Route exact path="/articles/:article_id/comments">
            <Comments />
          </Route>

          <Route exact path="/articles/:article_id">
            <ArticleDetails />
          </Route>

          <Route exact path="/articles">
            <Articles />
          </Route>

          <Route exact path="/users">
            <Users />
          </Route>

          <Route exact path="/edit">
            <Edit />
          </Route>

          <Route exact path="/delete">
            <Delete />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route>
            <p>404 - not found</p>
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;

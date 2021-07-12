import "./App.css";

import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/articles">
          <Articles />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

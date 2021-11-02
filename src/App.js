import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Student from "./Components/Student";
import Opdracht from "./Components/Opdracht";
import Home from "./Components/Home";
// import Utils from "./utils";

const App = () => {
  // Utils();
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/student">Studenten</Link>
            </li>
            <li>
              <Link to="/opdracht">Opdrachten</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/student">
              <Student />
            </Route>
            <Route path="/opdracht">
              <Opdracht />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;

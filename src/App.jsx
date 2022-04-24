import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/posts">
          <Homepage />
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">
          <Write/>
        </Route>
        <Route path="/settings">
          <Settings/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

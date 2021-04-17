import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./screens/Home/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Chat from "./screens/Chat";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile"
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/editProfile">
            <EditProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

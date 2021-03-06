import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./screens/Home/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Chat from "./screens/Chat";
import Profile from "./screens/Profile";

import EditProfile from "./screens/EditProfile";
import PasswordReset from "./screens/PasswordReset";
import Authentication from "./screens/Authentication";


import About from "./screens/About";
import Contact from "./screens/Contact";

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
          <Route exact path="/authentication">
            <Authentication />
          </Route>
          <Route exact path="/forgotPassword">
            <PasswordReset />
          </Route>
          <Route exact path="/editProfile">
            <EditProfile />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

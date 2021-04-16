import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Chat from "./screens/Chat";
import Profile from "./screens/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Header />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

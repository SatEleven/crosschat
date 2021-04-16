import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./screens/Home";
import LoginForm from "./screens/Login";
import Chat from "./screens/Chat";
import Profile from "./screens/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginForm />
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

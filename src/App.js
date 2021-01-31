import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Events, Friends } from "./views";

function App() {
  return (
    <div id="app">
      <Navbar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/friends">
          <Friends />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

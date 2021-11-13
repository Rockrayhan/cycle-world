
import './App.css';
import Home from './Components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Explore from './Components/Home/Explore/Explore';
import Login from './Components/Login/Login';
import Purchase from './Components/Purchase/Purchase';
function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/purchase/:id">
            <Purchase></Purchase>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Explore from './Components/Home/Explore/Explore';
import Login from './Components/Login/Login';
import Purchase from './Components/Purchase/Purchase';
import Register from './Components/Login/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AddProducts from "./Components/AddProducts/AddProducts";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import MyOrders from "./Components/Dashboard/MyOrders/MyOrders";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/addproducts">
           <AddProducts></AddProducts>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
           <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/myorders">
           <MyOrders></MyOrders>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

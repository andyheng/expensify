import React from 'react';
import {BrowserRouter, Link, NavLink, Route, Switch} from "react-router-dom";
import ErrorPage from "../components/ErrorPage"
import Header from "../components/Header"
import About from "../components/About"
import Add from "../components/Add"
import Home from "../components/Home"
import Edit from "../components/Edit"

const AppRouter = () => (
  // Initialize the router
  <BrowserRouter>
    {/* pass routes to browserrouter */}
    {/* routes take a path, and a component to render */}
    {/* need a wrapper for multiple routes */}
    {/* Switch goes through the routes, and renders the first match. */}
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/add" component={Add}/>
        <Route path="/edit" component={Edit}/>
        <Route path="/about" component={About}/>
        <Route component={ErrorPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensity!</h1>
    <nav>
      {/* use NavLink in, well, navigation */}
      <NavLink to="/" activeClassName="selected" exact={true}>Home</NavLink>
      <NavLink to="/add" activeClassName="selected">Add</NavLink>
      <NavLink to="/about" activeClassName="selected">About</NavLink>
    </nav>
  </header>
)

export default Header
import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => (
  <div>
    <h1>404</h1>
    <p>Enter a valid url.</p>
    {/* use Link to take advantage of client-side routing for interal navigation. */}
    <Link to="/">Go back to home page.</Link>
  </div>
)

export default ErrorPage
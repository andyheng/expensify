import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./style/style.scss";


ReactDOM.render(
  <AppRouter />,
  document.querySelector("#container")
)
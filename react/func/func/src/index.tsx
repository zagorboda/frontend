import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/landing/app/app';
import LogIn from './components/login/login';
import reportWebVitals from './reportWebVitals';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route path="/login">
                  <LogIn />
              </Route>
              <Route path="/">
                  <App />
              </Route>
              <Redirect to="/" />
          </Switch>
      </Router>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

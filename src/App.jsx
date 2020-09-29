import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Details from './search/components/details/Details';
import Search from './search/Search';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
      <Switch>
      <Route exact path="/">
        <Redirect to="/search" />
        </Route>
        <Route path="/search" component={Search} />
        <Route path="/details" component={Details} />
      </Switch>  
      </Router>
    </div>
  );
}

export default App;

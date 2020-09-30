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
        <Route exact path="/search" component={Search} />
        <Route exact path="/details/:repositoryName" component={Details} />
        <Route path="/"><Redirect to="/search" /></Route>
      </Switch>  
      </Router>
    </div>
  );
}

export default App;

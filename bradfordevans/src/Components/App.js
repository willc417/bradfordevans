import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import FrontPage from './FrontPage'
import NavBar from './NavBar'
import Footer from './Footer'
import Music from './Music'
import Story from './Story'
import Video from './Video'

class App extends React.Component {
  render() {
    return (
      <Router>
      <NavBar />
        <Switch>
          <Route path="/" exact component={FrontPage}/>
          <Route path="/music" component={Music}/>
          <Route path="/story" component={Story}/>
          <Route path="/video" component={Video}/>
        </Switch>
      <Footer/>
      </Router>
    );
    }
}

export default App;

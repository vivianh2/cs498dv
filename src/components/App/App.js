import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import MainContent from '../MainContent/MainContent';
import HomePage from '../HomePage/HomePage';
import AllSubjects from '../DataChart/AllSubjects';
import Dot from '../DataChart/Dot';

class App extends Component {
  render() {
    console.log("App");
    return (
      <div>
        <NavBar />
        <Router>
        <div >
            <Route exact path="/" component={HomePage} />
            <Route exact path='/subject' component={AllSubjects}/>
            <Route path='/subject/:course' component={AllSubjects}/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;

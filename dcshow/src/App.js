import React, { Component } from 'react';
import Podcasts from './components/Podcasts'
import About from './components/AboutComponent.js'
import Contact from './components/ContactComponent.js'
import Home from './components/HomeComponent.js'
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


class App extends Component {

  highlightTabs(tab, event){
    var tabs=["home", "podcasts", "about", "contact"];
    for(var i=0; i< tabs.length; i++){
      var tabItem=document.getElementById(tabs[i]);
      tabItem.style.backgroundColor = "transparent";

    }
    var tab=document.getElementById(tab);
    tab.style.backgroundColor="white";


  }


  render() {
    return (
      <Router>
      <div className="App">
    

        <ul>
        <div class="leftSide"><li> The DC Show</li></div>
        <li id="home" onClick={event => this.highlightTabs("home", event)}> <Link to="/" >Home </Link></li>
        <li id="podcasts" onClick={event => this.highlightTabs("podcasts", event)}> <Link to="/podcasts">Podcasts </Link></li>
        <li id="about" onClick={event => this.highlightTabs("about", event)}> <Link to="/about">About </Link></li>
        <li id= "contact" onClick={event => this.highlightTabs("contact", event)}> <Link to="/contact">Contact </Link></li>
        </ul>

        <Route path="/podcasts" component={Podcasts}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      <Route path="/" exact={true} component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;

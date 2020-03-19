import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home';
import Mophology from './pages/Mophology';
import Shape from './pages/Shape';
import Arrange from './pages/Arrange';
import Distribution from './pages/Distribution';
import Color from './pages/Color';
import AnatomicalSite from './pages/AnatomicalSite';
import Picture from './pages/Picture';
import Result from './pages/Result';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" exact component={Home}/>
      <Route path="/mophology" exact component={Mophology}/>
      <Route path="/shape" exact component={Shape}/>
      <Route path="/arrange" exact component={Arrange}/>
      <Route path="/distribution" exact component={Distribution}/>
      <Route path="/color" exact component={Color}/>
      <Route path="/anatomicalsite" exact component={AnatomicalSite}/>
      <Route path="/picture" exact component={Picture}/>
      <Route path="/result" exact component={Result}/>
    </div>
    </Router>
  );
}

export default App;

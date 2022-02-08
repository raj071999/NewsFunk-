import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { useState } from 'react';
import TextForm from './component/TextForm';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import About from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";










function App() {
  const [mode, setmode] = useState('light');
  const ToggleMode =()=>{
    if(mode ==='light'){
    setmode('dark');
    document.body.style.backgroundColor = '#19193d' ;
    }
    
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <>
    <Router>
    <Navbar title="Textutils"  mode ={mode} ToggleMode= {ToggleMode} />
    <div className="container my-3" >
    <Switch>
      <Route path ="/about">
        <About mode={mode}/>
        </Route>
        <Route path ="/">
        <TextForm heading = "Enter the text to analyze below " mode={mode} / > 
  
    </Route>
    </Switch>
    </div>
    </Router>
 
 </>


  );
}

export default App;

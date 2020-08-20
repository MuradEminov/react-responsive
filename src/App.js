import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import MyJumbotron from './components/Jumbotron';

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <Navigation />
      <div className="container">
      <MyJumbotron />
      </div>
      <h1>React Bootstrap</h1>

    </div>
  );
}

export default App;

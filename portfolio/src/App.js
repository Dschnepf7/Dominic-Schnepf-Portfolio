import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}



export default App;

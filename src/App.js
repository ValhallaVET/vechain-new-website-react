import React, { Component } from 'react';

import Hero from './components/Hero';
import Featured from './components/Featured';
import UseCases from './components/UseCases';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Wallet from './components/Wallet';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Featured />
        <UseCases />
        <Roadmap />
        <Team />
        <Wallet />
        <Footer />
      </div>
    );
  }
}

export default App;

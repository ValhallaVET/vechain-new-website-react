import React, { Component } from 'react';

import Notification from './components/Notification';
import Hero from './components/Hero';
import Featured from './components/Featured';
import UseCases from './components/UseCases';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Wallet from './components/Wallet';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Notification />
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

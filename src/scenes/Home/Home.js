import React from 'react';
import Media from 'react-media';

import Notification from '../../components/Notification';
import Hero from '../../components/Hero';
import Featured from '../../components/Featured';
import UseCases from '../../components/UseCases';
import Roadmap from '../../components/Roadmap';
import Team from '../../components/Team';
import Wallet from '../../components/Wallet';
import Footer from '../../components/Footer';

const Home = () => (
  <div>
    <Media
      query='(min-width: 75em)'
      render={() => <Notification /> } />
    <Hero />
    <Featured />
    <UseCases />
    <Roadmap />
    <Team />
    <Wallet />
    <Footer />
  </div>
);

export default Home;

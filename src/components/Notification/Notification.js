import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { EasterEggOpener, Valhalla } from '../EasterEgg';
import { Container } from '../Layout';

const Wrapper = styled.div`
  align-items: center;
  display: none;
  background-image: linear-gradient(137deg, #00C0FF 0%, #0BB3EB 21%, #1973E0 70%, #5419E0 100%);
  box-shadow: 0 13px 23px -18px rgba(0,0,0,0.50);
  font-weight: 800;
  height: 0;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
  
  p {
    color: #ffffff;
    font-size: 1em;
    margin: 0;
  }

  @media all and (min-width: 75em) {
    display: flex;
    height: 62px;
  }
`;

class Notification extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.toggleEasterEgg = this.toggleEasterEgg.bind(this);
  }

  toggleEasterEgg() {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Fragment>
        <Wrapper>
          <Container>
            <p>The VeChainThor platform is now live. Visit GitHub and download the source code</p>
          </Container>
          <EasterEggOpener onOpen={this.toggleEasterEgg} />
        </Wrapper>
        { isOpen &&
          <Valhalla openToggle={this.toggleEasterEgg} key="easter-egg" />
        }
      </Fragment>
    );
  }
}

export default Notification;

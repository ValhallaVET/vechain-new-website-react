import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import posed from "react-pose";
import Lottie from 'react-lottie';
import Typist from 'react-typist';

import animation from './animation.json';

const PosedWrapper = posed.div({
  open: { 
    opacity: 1,
    delay: 4000,
    transition: {
      duration: 1000,
    }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 1000,
    }
  }
});

const PosedAnimation = posed.div({
  open: { 
    opacity: 1,
  },
  closed: {
    opacity: 0,
  }
});

const Wrapper = styled(PosedWrapper)`
  align-items: center;
  background: #ffffff;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 4;
`;

const Animation = styled(PosedAnimation)`
  align-items: center;
  background: #ffffff;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 4;
`;

const Text = styled.div`
  color: black;
  font-family: 'Oleo Script Swash Caps', cursive;
  font-size: 5em;
  text-transform: none;
`;

const GrayOverlay = styled.div`
  background: #ffffff;
  mix-blend-mode: hue;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 3;
  height: 100vh;
`;

class Valhalla extends Component {
  static animation = {
    loop: false,
    autoplay: true,
    renderer: 'svg',
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  constructor() {
    super();

    this.state = {
      showText: false,
      showLottie: false,
      close: false,
    };

    this.startTyping = this.startTyping.bind(this);
    this.close = this.close.bind(this);
    this.showLottie = this.showLottie.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.showLottie();
    }, 1000);

    setTimeout(() => {
      this.startTyping();
    }, 5000);
  }

  startTyping() {
    this.setState({ showText: true }, () => {
      setTimeout(() => {
        this.close();
      }, 6000);
    });
  }

  close() {
    this.setState({ close: true }, () => {
      setTimeout(() => {
        this.props.openToggle();
      }, 1000);
    });
  }

  showLottie() {
    this.setState({ showLottie: true }, () => {
      setTimeout(() => {
        this.setState({ showLottie: false });
      }, 4000);
    });
  }

  render() {
    const { showText, close, showLottie } = this.state;

    return (
      <Fragment>

        <Animation pose={showLottie ? 'open' : 'closed'} initialPose="closed">
          <Lottie options={Valhalla.animation} />
        </Animation>

        <Wrapper pose={close ? 'closed' : 'open'} initialPose="closed">
          { showText &&
            <Typist stdTypingDelay={50} avgTypingDelay={120} cursor={{ show: false}}>
              <Text>From Valhalla with Love.</Text>
            </Typist>
          }
        </Wrapper>
        <GrayOverlay />
      </Fragment>
    );
  }
}

export default Valhalla;

import React, { Component } from 'react';
import styled from 'styled-components';
import appStore from './app-store.png';
import googlePlay from './google-play.png';
import phone from './phone.png';
import bg from './bg.png';

import { Row, Col } from '../Layout';

const Wrapper = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 150px;

  @media all and (min-width: 75em) {
    padding-bottom: 0;
  }
`;

const Image = styled.div`
  display: none;
  padding: 50px;

  img {
    width: 100%;
  }

  @media all and (min-width: 75em) {
    display: block;
  }
`;

const Info = styled.div`
  text-align: center;

  @media all and (min-width: 75em) {
    text-align: left;
    width: 70%;
  }
`;

const AppLink = styled.a`
  display: inline-block;
  width: 150px;

  img {
    width: 100%;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Row middle>
          <Col sm={1} lg={6}>
            <Image>
              <img src={phone} />
            </Image>
          </Col>
          <Col sm={1} lg={6}>
            <Info>
              <h4>Download Today</h4>
              <h3>VeChainThor Mobile Wallet</h3>
              <p>VeChainThor Wallet is a light mobile wallet app. We aim to provide users with a powerful, secure, simple and fully functional portal to the VeChainThor blockchain.</p>
              <Row>
                <Col sm={6} lg={6}>
                  <AppLink>
                    <img src={appStore} />
                  </AppLink>
                </Col>
                <Col sm={6} lg={6}>
                  <AppLink>
                    <img src={googlePlay} />
                  </AppLink>
                </Col>
              </Row>
            </Info>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default App;

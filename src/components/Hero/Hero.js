import React, { Component } from 'react';
import styled from 'styled-components';

import Video from '../Video';
import Header from '../Header';
import Subtitle from '../Subtitle';
import { Container, Row, Col } from '../Layout';
import Button from '../Button';

import heroBg from './hero-bg.png';
import heroMainImage from './hero-main-image.png';

const Section = styled.section`
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  position: relative;

  @media all and (min-width: 75em) {
    background-size: cover;
  }
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 2.3em;
  text-align: center;
  text-transform: uppercase;
  margin: 0;

  @media all and (min-width: 75em) {
    font-size: 3em;
    text-align: left;
  }
`;

const MainImage = styled.div`
  display: none;
  max-width: 600px;

  img {
    width: 100%;
  }

  @media all and (min-width: 75em) {
    display: block;
  }
`;

const MainContent = styled.div`
  margin-top: 50px;
  text-align: center;

  @media all and (min-width: 75em) {
    text-align: left;
    margin-top: 100px;
    padding-left: 50px;
    padding-right: 20px;
  }
`;

class Hero extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Header />
          <Row middle>
            <Col sm={1} lg={6}>
              <Title>VeChain Thor the Blockchain X</Title>
              <Subtitle light>
                VeChain is a leading global enterprise <br />  level public blockchain platform.
              </Subtitle>
              <Row>
                <Col sm={1} lg={6}>
                  <Button subdued>Development Plan & Whitepaper</Button>
                </Col>
                <Col sm={1} lg={6}>
                  <Button subdued>VeChain Thor Github</Button>
                </Col>
              </Row>
            </Col>
            <Col sm={1} lg={6}>
              <Video />
            </Col>
          </Row>
          <Row middle>
            <Col sm={1} lg={6}>
              <MainImage>
                <img src={heroMainImage} alt="VeChain Hero" />
              </MainImage>
            </Col>
            <Col sm={1} lg={6}>
              <MainContent>
                <h4>What is VeChain?</h4>
                <h2>Lorem ipsum dolor sit amet consectetur adipiscing.</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <ul>
                  <li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                  </li>
                  <li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                  </li>
                  <li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  </li>
                </ul>
              </MainContent>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Hero;

import React, { Component } from 'react';
import styled from 'styled-components';

import Video from '../Video';
import Header from '../Header';
import Subtitle from '../Subtitle';
import { List, Item } from '../List';
import { Container, Row, Col } from '../Layout';
import { Button, ButtonImage } from '../Button';
import { Paper, Github } from '../Icons';

import heroBg from './hero-bg.png';
import heroMainImage from './hero-main-image.png';
import aim from './aim.png';
import blob from './blob.png';
import shield from './shield.png';

const Wrapper = styled.div`
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  margin-top: -10px;
  position: relative;
  padding-top: 0;

  @media all and (min-width: 75em) {
    background-size: cover;
    padding-top: 62px;
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
  margin-bottom: 50px;
  text-align: center;

  @media all and (min-width: 75em) {
    text-align: left;
    margin-bottom: 0;
    margin-top: 100px;
    padding-left: 50px;
    padding-right: 20px;
  }
`;

const ContentTitle = styled.h2`
  color: rgba(255, 255, 255, 0.8);

  @media all and (min-width: 75em) {
    color: #303F4D;
  }
`;

const ModifiedButton = styled(Button)`
  margin-top: 20px;

  @media all and (min-width: 75em) {
    margin-top: 0;
  }
`;

class Hero extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Header />
          <Row middle>
            <Col sm={12} lg={6}>
              <Title>VeChain Thor the Blockchain X</Title>
              <Subtitle light>
                VeChain is a leading global enterprise <br />  level public blockchain platform.
              </Subtitle>
              <Row>
                <Col sm={12} lg={6}>
                  <a href="https://cdn.vechain.com/vechainthor_development_plan_and_whitepaper_en_v1.0.pdf" target="_blank" rel="noopener noreferrer">
                    <ModifiedButton subdued>
                      <ButtonImage width={21}>
                        <Paper />
                      </ButtonImage>
                      Development Plan & Whitepaper
                    </ModifiedButton>
                  </a>
                </Col>
                <Col sm={12} lg={6}>
                  <a href="https://github.com/vechain/thor" target="_blank" rel="noopener noreferrer">
                    <ModifiedButton subdued style={{ marginBottom: 50 }}>
                      <ButtonImage width={21}>
                        <Github />
                      </ButtonImage>
                      VeChain Thor Github
                    </ModifiedButton>
                  </a>
                </Col>
              </Row>
            </Col>
            <Col sm={12} lg={6}>
              <Video />
            </Col>
          </Row>
          <Row middle>
            <Col sm={12} lg={6}>
              <MainImage>
                <img src={heroMainImage} alt="VeChain Hero" />
              </MainImage>
            </Col>
            <Col sm={12} lg={6}>
              <MainContent>
                <h4>What is VeChain?</h4>
                <ContentTitle>
                  VeChain is a leading global blockchain platform designed for widespread enterprise adoption. 
                </ContentTitle>
                <p>VeChain combines advanced IoT integration with a secure governance structure and an innovative economic model to pioneer real world solutions. From streamlining corporate supply chains, to verifying the authenticity of retail inventories, or monitoring the lifespan of medical vaccines, VeChain provides the tools to solve a number of industry bottlenecks and pain points.</p>
                <List>
                  <Item image={blob} width={32} height={32}>
                    <p>Scalability: Offering a high TPS (transactions per second), industry specific dApps, and a ground-breaking Multi-Party Payment Protocol, VeChain can offer solutions for small businesses or multinational corporations.</p>
                  </Item>
                  <Item image={shield} width={23} height={29}>
                    <p>Security: VeChain’s Proof of Authority consensus model anchors the blockchain behind some of the most reputable firms in the industry, building a decentralized network that guarantees trust for both clients and consumers.</p>
                  </Item>
                  <Item image={aim} width={22} height={22}>
                    <p>Speed: With blocks being processed every 10 seconds, the blockchain ensures near-instant confirmation, freeing users from the constraints of traditional blockchains.</p>
                  </Item>
                </List>
              </MainContent>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default Hero;

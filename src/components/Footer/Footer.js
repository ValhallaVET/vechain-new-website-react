import React, { Component } from 'react';
import styled from 'styled-components';

import Input from '../Input';
import EndFooter from '../EndFooter';
import { Container, Row, Col } from '../Layout';
import logo from '../Header/logo.svg';

import bg from './bg.png';

const Wrapper = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  color: #ffffff;
  margin-top: -90px;

  @media all and (min-width: 75em) {
    margin-top: -50px;
    padding-top: 150px;
  }
`;

const Section = styled.div`
  padding: 40px 0;

  span {
    font-weight: 700;
  }

  a {
    font-weight: 600;
  }

  a,
  span {
    color: #ffffff;
    display: block;
  }

  span ~ a {
    margin-bottom: 20px;
  }

  form {
    margin-top: 0;

    @media all and (min-width: 75em) {
      margin-top: 60px;
    }
  }

  @media all and (min-width: 75em) {
    padding: 50px;
  }
`;

const LogoContainer = styled.div`
  display: none;

  img {
    width: 100%;
  }

  @media all and (min-width: 75em) {
    display: block;
  }
`;

const Title = styled.h4`
  color: #ffffff;
  font-size: 1.500em;
  font-family: 'Lato', sans-serif;
  margin-top: 0;
  text-transform: uppercase;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 25px;
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col lg={4}>
              <Section>
                <LogoContainer>
                  <img src={logo} alt="Footer Logo" />
                </LogoContainer>
              </Section>
            </Col>
            <Col lg={4}>
              <Section>
                <Title>Contact</Title>
                <Row>
                  <Col lg={6}>
                    <span>Business Development:</span>
                    <a href="mailto:bd@vechain.com">bd@vechain.com</a>
                    <span>Recruitment:</span>
                    <a href="mailto:hr@vechain.com">hr@vechain.com</a>
                    <span>VeResearch Program:</span>
                    <a href="mailto:veresearch@vechain.com">veresearch@vechain.com</a>
                  </Col>
                  <Col lg={6}>
                    <span>Media:</span>
                    <a href="mailto:press@vechain.com">press@vechain.com</a>
                    <span>Others:</span>
                    <a href="mailto:info@vechain.com">info@vechain.com</a>
                    <span>Support:</span>
                    <a href="mailto:support@vechain.com">support@vechain.com</a>
                  </Col>
                </Row>
                <a href="tel:+65090379543">+65 (0) 9037 9543</a>
                <address>
                  7 Straits View, Marina One East Tower, #05-01, Singapore, 018936
                </address>
              </Section>
            </Col>
            <Col lg={4}>
              <Section>
                <Title>VeChain Newsletter</Title>
                <form>
                  <Label htmlFor="email">Enter your email to join our Newsletter now!</Label>
                  <Input />
                </form>
              </Section>
            </Col>
          </Row>
        </Container>
        <EndFooter />
      </Wrapper>
    );
  }
}

export default Footer;

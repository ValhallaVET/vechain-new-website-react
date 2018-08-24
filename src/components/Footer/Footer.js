import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from '../Layout';
import { Logo } from '../Icons';

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

  svg {
    width: 100%;
  }

  @media all and (min-width: 75em) {
    display: block;
  }
`;

const Title = styled.h4`

`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col lg={4}>
              <Section>
              </Section>
            </Col>
            <Col lg={4}>
              <Section>
                <Title>Contact</Title>
              </Section>
            </Col>
            <Col lg={4}>
              <Section>
                <Title>VeChain Newsletter</Title>
              </Section>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default Footer;

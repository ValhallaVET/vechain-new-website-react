import React, { Component } from 'react';
import styled from 'styled-components';

import { Button } from '../Button';
import TeamMembers from '../TeamMembers';
import { InnerContainer } from '../Layout';
import logo from '../Header/logo.svg';

const Wrapper = styled.div`
  position: relative;
  z-index: 1;

  @media all and (min-width: 75em) {
    margin-top: -150px;
  }
`;

const Image = styled.div`
  display: none;
  width: 292px;
  margin: 0 auto;

  img {
    width: 100%;
  }

  @media all and (min-width: 75em) {
    display: block;
  }
`;

const Header = styled.div`
  text-align: center;
`;

const Footer = styled.div`
  text-align: center;
  margin-bottom: 50px;

  button {
    margin-bottom: 30px;
  }

  @media all and (min-width: 75em) {
    button {
      margin-bottom: 0;

      & ~ button {
        margin-left: 30px;
      }
    }
  }
`;

class Team extends Component {
  render() {
    return (
      <Wrapper>
        <Image>
          <img src={logo} alt="VeChain Logo" />
        </Image>
        <InnerContainer>
          <Header>
            <h4>Core Team</h4>
          </Header>
          <TeamMembers />
          <Footer>
            <Button secondary>Board Of Advisors</Button>
            <Button primary>Steering Committee</Button>
          </Footer>
        </InnerContainer>
      </Wrapper>
    );
  }
}

export default Team;

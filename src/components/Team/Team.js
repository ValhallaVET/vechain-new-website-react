import React, { Component } from 'react';
import styled from 'styled-components';

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

class Team extends Component {
  render() {
    return (
      <Wrapper>
        <Image>
          <img src={logo} />
        </Image>
        <InnerContainer>
          <h4>Core Team</h4>
          <TeamMembers />
        </InnerContainer>
      </Wrapper>
    );
  }
}

export default Team;

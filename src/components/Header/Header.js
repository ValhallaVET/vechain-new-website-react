import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from '../Nav';

import logo from './logo.svg';

const Wrapper = styled.header`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 30px 0 50px 0;

  @media all and (min-width: 75em) {
    margin: 50px 0;
    padding: 0;
  }
`;

const Logo = styled.a`
  width: 40px;

  img {
    width: 100%;
  }

  @media all and (min-width: 75em) {
    width: 80px;
  }
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Logo href="/">
          <img src={logo} alt="VeChain Logo" />
        </Logo>
        <Nav />
      </Wrapper>
    );
  }
}

export default Header;

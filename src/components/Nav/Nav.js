import React, { Component } from 'react';
import MenuButton from '../MenuButton';
import styled from 'styled-components';

const Wrapper = styled.nav`
  align-items: center;
  display: flex;
  position: relative;

  span {
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    letter-spacing: 0.279em;
    margin-right: 20px;
  }
`;

const Button = styled.a`
  cursor: pointer;
  width: 25px;

  img {
    width: 100%;
  }

  @media all and (min-width: 75em) {
    width: 50px;
  }
`;

class Nav extends Component {
  render() {
    return (
      <Wrapper>
        <span>Menu</span>
        <MenuButton />
      </Wrapper>
    );
  }
}

export default Nav;

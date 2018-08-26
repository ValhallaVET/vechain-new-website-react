import React, { Component } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import data from './data.json';

const Hamburger = styled.div`
  cursor: pointer;
`;

class MenuButton extends Component {
  static defaultOptions ={
    loop: false,
    autoplay: false,
    renderer: 'svg',
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  render() {
    return (
      <Hamburger>
        <Lottie options={MenuButton.defaultOptions} width={50} />
      </Hamburger>
    )
  }
}

export default MenuButton;

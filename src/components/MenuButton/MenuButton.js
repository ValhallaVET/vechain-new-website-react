import React, { Component } from 'react';
import Lottie from 'react-lottie';
import data from './data.json';
import love from './love.json';

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

  constructor() {
    super();

    this.state = {
      isClicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clicked')
  }

  render() {
    return (
      <Lottie 
        onClick={this.handleClick}
        options={MenuButton.defaultOptions} 
        width={50} />
    )
  }
}

export default MenuButton;

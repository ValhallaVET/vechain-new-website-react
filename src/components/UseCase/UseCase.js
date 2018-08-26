import React, { Component } from 'react';
import Tilt from 'react-tilt';
import styled from 'styled-components';

import { Button, ButtonImage } from '../Button';
import SimpleDialog from '../SimpleDialog';

import bg from './bg.png';
import playBtn from './play-btn.png';

const Wrapper = styled(Tilt)`
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0 32px 42px 0 rgba(26,22,44,0.05);
  padding: 20px;
  text-align: center;
  margin-bottom: 50px;
  transform-style: preserve-3d;
  width: 100%;

  @media all and (min-width: 75em) {
    text-align: left;
    padding: 50px;
  }
`;

const Inner = styled.div`
  transform: translateZ(100px);
`;

const Image = styled.div`
  background: url(${bg}) no-repeat center center;
  background-size: contain;
  margin: 0 auto;
  width: 139px;

  img {
    width: 100%;
  }

  @media all and (min-width: 75em) {
    margin: initial;
  }
`;

const Footer = styled.div`
  margin-top: 40px;

  .c-button {
    margin: 0 auto;
  }

  @media all and (min-width: 75em) {
    .c-button {
      margin: initial;
    }
  }
`

class UseCase extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const { image, title, content, video } = this.props;

    return (
      <Wrapper options={{ max: 5, perspective: 5000, scale: 1.01 }}>
        <Inner>
          <Image>
            <Inner>
              <img src={image} alt={title} />
            </Inner>
          </Image>
          <h3>{ title }</h3>
          <p>{ content }</p>
          <Footer>
            <Button light onClick={this.handleClickOpen}>
              <ButtonImage width={50}>
                <img src={playBtn} alt="Video Play Button" />
              </ButtonImage>
              Watch
            </Button>
            <SimpleDialog open={open} onClose={this.handleClose}>
              <iframe 
                width="560" 
                height="315" 
                src={video} 
                title={title}
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen></iframe>
            </SimpleDialog>
          </Footer>
        </Inner>
      </Wrapper>
    );
  }
}

export default UseCase;

import React, { Component } from 'react';
import { Button, ButtonImage } from '../Button';
import styled from 'styled-components';

import playBtn from './play-btn.png';

const Wrapper = styled.div`
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0 32px 42px 0 rgba(26,22,44,0.05);
  padding: 20px;
  text-align: center;
  margin-bottom: 50px;
  width: 100%;

  @media all and (min-width: 75em) {
    text-align: left;
    padding: 50px;
  }
`;

const Image = styled.div`
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
`;

class UseCase extends Component {
  render() {
    const { image, title, content } = this.props;

    return (
      <Wrapper>
        <Image>
          <img src={image} alt={title} />
        </Image>
        <h3>{ title }</h3>
        <p>{ content }</p>
        <Footer>
          <Button light>
            <ButtonImage width={50}>
              <img src={playBtn} alt="Video Play Button" />
            </ButtonImage>
            Watch
          </Button>
        </Footer>
      </Wrapper>
    );
  }
}

export default UseCase;

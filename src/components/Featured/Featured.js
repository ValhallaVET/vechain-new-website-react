import React, { Component } from 'react';
import styled from 'styled-components';

import breyer from './breyer.png';
import fenbush from './fenbush.png';
import draper from './draper.png';
import dnvGl from './dnv-gl.png';
import futureCap from './future-cap.png';

const Wrapper = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 40px;
  max-width: 80vw;
  position: relative;
  z-index: 1;
`;

const Title = styled.div`
  color: rgba(107, 135, 162, 0.50);
  font-family: 'Lato', sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 25px;

  @media all and (min-width: 75em) {
    text-align: left;
  }
`;

const Content = styled.div`
  align-items: center;
  border-radius: 7px;
  box-shadow: 0 0 20px 0 rgba(29, 17, 86, 0.12);
  display: flex;
  flex-wrap: wrap;

  @media all and (min-width: 75em) {
    flex-wrap: nowrap;
    justify-content: space-around;
  }
`;

const Item = styled.div`
  flex-basis: 50%;
  line-height: 1;
  max-width: 50%;
  padding: 20px;

  img {
    width: 100%;
  }

  @media all and (min-width: 75em) {
    padding: 25px 50px;
  }
`;

class Featured extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Featured Supporters</Title>

        <Content>
          <Item>
            <img src={breyer} alt="Breyer Capital" />
          </Item>
          <Item>
            <img src={fenbush} alt="Fenibush Capital" />
          </Item>
          <Item>
            <img src={draper} alt="Draper Dragon" />
          </Item>
          <Item>
            <img src={dnvGl} alt="DNV-GL" />
          </Item>
          <Item>
            <img src={futureCap} alt="FutureCap" />
          </Item>
        </Content>
      </Wrapper>
    );
  }
}

export default Featured;

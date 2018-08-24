import React, { Component } from 'react';
import styled from 'styled-components';

import roadmap from './roadmap.png';

const Wrapper = styled.div`
  position: relative;

  &:before {
    background: #FAFCFF;
    content: "";
    display: block;
    height: 50%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  img {
    width: 100%;
  }
`;

class Roadmap extends Component {
  render() {
    return (
      <Wrapper>
        <img src={roadmap} alt="VeChain Roadmap" />
      </Wrapper>
    );
  }
}

export default Roadmap;

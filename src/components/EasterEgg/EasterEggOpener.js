import React, { Component } from 'react';
import styled from 'styled-components';

import { Button } from '../Button';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  right: 0;
  width: 100px;
`;

const ModifiedButton = styled(Button)`
  color: rgba(0, 0, 0, 0.4);
  font-family: 'Oleo Script Swash Caps', cursive;
  font-size: 1.5em;
  padding: 0 20px;
`;

class EasterEggOpener extends Component {
  render() {
    return (
      <Wrapper>
        <ModifiedButton subdued onClick={this.props.onOpen}>V</ModifiedButton>
      </Wrapper>
    );
  }
}

export default EasterEggOpener;

import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: inline-flex;
  margin-right: 7px;
  max-width: ${({ width }) => width }px;

  img {
    width: 100%;
  }
`
class ButtonImage extends Component {
  render() {
    return (
      <Wrapper {...this.props}>
        { this.props.children }
      </Wrapper>
    );
  }
}

export default ButtonImage;

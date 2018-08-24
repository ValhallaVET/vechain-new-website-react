import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1440px;

  @media all and (min-width: 75em) {
    padding: 0 48px;
  }
`;

class Container extends Component {
  render() {
    return (
      <Wrapper>
        { this.props.children }
      </Wrapper>
    );
  }
}

export default Container;

import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 80vw;
  margin: 0 auto;
`;

class InnerContainer extends Component {
  render() {
    return (
      <Wrapper>
        { this.props.children }
      </Wrapper>
    );
  }
}

export default InnerContainer;

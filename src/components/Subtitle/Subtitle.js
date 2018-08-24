import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSubtitle = styled.h3`
  font-size: 1.375em;
  font-weight: normal;
  line-height: 1.5em;
  margin: 20px 0;
  text-align: center;

  @media all and (min-width: 75em) {
    text-align: left;
  }

  ${({ dark }) => dark && `color: #6B87A4`}
  ${({ light }) => light && `color: rgba(255, 255, 255, 0.8)`}
`;

class Subtitle extends Component {
  render() {
    return (
      <StyledSubtitle {...this.props}>
        { this.props.children }
      </StyledSubtitle>
    );
  }
}

export default Subtitle;

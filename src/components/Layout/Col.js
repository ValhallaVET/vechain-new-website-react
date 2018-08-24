import React, { Component } from 'react';
import styled from 'styled-components';

const getWidthString = (span) => {
  if (!span) return;

  let width = span / 12 * 100;
  return `
    flex-basis: ${width}%;
    max-width: ${width}%;
  `
};

const Wrapper = styled.div`
  ${({ sm }) => sm && getWidthString(sm)}

  @media all and (min-width: 75em) {
    ${({ lg }) => lg && getWidthString(lg)}
  }
`;

class Col extends Component {
  render() {
    return (
      <Wrapper {...this.props}>
        { this.props.children }
      </Wrapper>
    );
  }
}

export default Col;

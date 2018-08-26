import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${ ({ middle }) => middle && css` 
    align-items: center;
  `}

  ${ ({ willwrap }) => willwrap && css`
    flex-direction: row;
    flex-wrap: wrap;
  ` }
`;

class Row extends Component {
  render() {
    return (
      <Wrapper {...this.props}>
        { this.props.children }
      </Wrapper>
    );
  }
}

export default Row;

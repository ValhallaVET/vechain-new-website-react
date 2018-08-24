import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${ ({ middle }) => middle && `align-items: center;` }

  ${ ({ wrap }) => wrap && `
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

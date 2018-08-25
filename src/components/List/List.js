import React, { Component } from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
  position: relative;
  padding: 0;

  li {
    margin-top: 25px;

    &:before {
      content: "";
      display: none;
      left: 0;
      position: absolute;
    }
  }

  @media all and (min-width: 75em) {
    li {
      padding-left: 60px;

      &:before {
        display: inline-block;
      }
    }
  }
`;

class List extends Component {
  render() {
    return (
      <Ul>
        { this.props.children }
      </Ul>
    );
  }
}

export default List;

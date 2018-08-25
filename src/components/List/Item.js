import React, { Component } from 'react';
import styled from 'styled-components';

const Item = styled.li`
  margin-top: 25px;

  &:before {
    content: "";
    display: none;
    left: 0;
    position: absolute;
  }

  @media all and (min-width: 75em) {
    padding-left: 60px;

    &:before {
      background: url(${({ image }) => image }) no-repeat left top;
      background-size: cover;
      display: inline-block;
      height: ${({ height }) => height }px;
      width: ${({ width }) => width }px;
    }
  }
`;

class List extends Component {
  render() {
    return (
      <Item {...this.props}>
        { this.props.children }
      </Item>
    );
  }
}

export default List;

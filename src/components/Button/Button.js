import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  border: none;
  border-radius: 32px;
  cursor: pointer;
  text-transform: uppercase;
  padding: 20px 70px;
  width: 100%;
  transition: all .2s ease-in-out;
  white-space: nowrap;

  @media all and (min-width: 75em) {
    width: auto;
  }

  ${({ primary }) => primary && `
    background-color: transparent;
    border: 4px solid #6B87A4;
    color: #6B87A4;
    font-weight: 700;
    letter-spacing: 2px;

    &:hover {
      background-color: #6B87A4;
      box-shadow: 0 8px 56px -13px rgba(29,17,86,0.76);
      color: #ffffff;
    }
  `}

  ${({ secondary }) => secondary && `
    background-image: linear-gradient(-49deg, #140772 0%, #070039 31%, #170C64 49%, #0C2F8F 71%, #698DC6 100%);
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 2px;

    &:hover {
      background-image: linear-gradient(-137deg, #00C0FF 0%, #0BB3EB 21%, #1973E0 70%, #5419E0 100%);
      box-shadow: 0 8px 56px -13px rgba(29,17,86,0.76);
      color: #0D044F;
    }
  `}

  ${({ special }) => special && `
    font-family: 'Oleo Script Swash Caps', cursive !important;
    font-size: 2em !important;
    outline: none;
  `}

  ${({ light }) => light && `
    align-items: center;
    background-color: rgba(215, 224, 233, 0.32);
    color: #E2689A;
    cursor: pointer;
    display: flex;
    font-size: 0.7em;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif; 
    font-weight: bold;
    letter-spacing: 4px;
    padding: 5px 25px 5px 3px;
    width: auto;
  `}

  ${({ subdued }) => subdued && `
    align-items: center;
    background: linear-gradient(153deg, rgba(27, 59, 216, 0.150) 0%, rgba(23, 108, 224, 0.15) 31%, rgba(11, 146, 231, 0.15) 49%, rgba(11, 182, 235, 0.15) 71%, rgba(0, 224, 242, 0.15) 100%);
    border: none;
    border-radius: 25px;
    color: rgba(255, 255, 255, 0.39);
    display: inline-flex;
    text-transform: uppercase;
    font-family: "ProximaNova";
    font-size: 0.750em;
    font-weight: 700;
    height: 32px;
    letter-spacing: 2px;
    line-height: 32px;
    padding: 0 10px;

    svg {
      opacity: 0.3;
    }

    &:hover {
      background: linear-gradient(153deg, rgba(27, 59, 216, 0.80) 0%, rgba(23, 108, 224, 0.80) 31%, rgba(11, 146, 231, 0.80) 49%, rgba(11, 182, 235, 0.80) 71%, rgba(0, 224, 242, 0.80) 100%);
      color: #0D044F;

      g,
      math,
      svg,
      path {
        fill: #0D044F;
        opacity: 1;
      }
    }
  `}
`;

class Button extends Component {
  render() {
    return (
      <Wrapper {...this.props}>
        { this.props.children }
      </Wrapper>
    );
  }
}

export default Button;

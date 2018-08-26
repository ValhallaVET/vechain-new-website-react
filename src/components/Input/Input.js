import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  input[type="email"] {
    border: none;
    flex: 4;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif; 
    padding: 20px;
  }

  input[type="submit"] {
    background-image: linear-gradient(-43deg, #140772 0%, #070039 31%, #170C64 49%, #0C2F8F 71%, #698DC6 140%);
    border: none;
    color: #ffffff;
    flex: 2;
    width: 100%;
  }
`;

class Input extends Component {
  render() {
    return (
      <Wrapper>
        <input type="email" name="email" placeholder="Your Email" />
        <input type="submit" value="Join Now" />
      </Wrapper>
    );
  }
}

export default Input;

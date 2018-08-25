import React, { Component } from 'react';
import styled from 'styled-components';

import { LinkedIn } from '../Icons';

const Wrapper = styled.div`
  margin: 0 20px;
  margin-bottom: 40px;
  text-align: center;

  @media all and (min-width: 75em) {
    margin: 0 50px;
    margin-bottom: 80px;
  }
`;

const Header = styled.div`
  position: relative;

  img {
    width: 100%;
  }

  &:before {
    content: "";
    background-color: #F6F9FD;
    border-radius: 100%;
    display: block;
    height: 100%;
    left: -13px;
    position: absolute;
    top: -13px;
    width: 100%;
    z-index: -1;
  }

  @media all and (min-width: 75em) {
    cursor: pointer;
  }
`;

const Content = styled.div`
  background: #ffffff;
  box-shadow: 0 14px 27px 0 rgba(0,0,0,0.50);
  border-radius: 4px;
  content: attr(data-content);
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif; 
  font-weight: 300;
  left: -150px;
  margin-left: auto;
  margin-right: auto;
  top: 100%;
  padding: 20px;
  position: absolute;
  right: -150px;
  width: 300px;
  z-index: 1;

  p {
    margin: 0;
  }

  &:before {
    content: "";
    border-bottom: 20px solid #ffffff;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    height: 0; 
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    right: 0;
    top: -20px;
    width: 0; 
  }
`;

class TeamMember extends Component {
  constructor() {
    super();

    this.state = {
      isHovered: false,
    }

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({ isHovered: true });
  }

  mouseLeave() {
    this.setState({ isHovered: false });
  }

  render() {
    const { isHovered } = this.state;
    const { name, title, image, content } = this.props;

    return (
      <Wrapper>
        <Header>
          <img src={image}
            alt={name}
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave} />
          { isHovered && 
            <Content>
              <p>{ content }</p>
            </Content>
          }
        </Header>
        <div>
          <p>{ name }</p>
          <p>{ title }</p>
          <a href="#">
            <LinkedIn />
          </a>
        </div>
      </Wrapper>
    );
  }
}

export default TeamMember;

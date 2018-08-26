import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, InnerContainer } from '../Layout';
import { Twitter, Facebook, Telegram } from '../Icons';

const Wrapper = styled.div`
  background-image: linear-gradient(-43deg, #140772 0%, #070039 31%, #170C64 49%, #0C2F8F 71%, #698DC6 150%);
  padding: 10px 0;
  margin-top: 100px;

  @media all and (min-width: 75em) {
    margin-top: 60px;
  }
`;

const Copyright = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  text-align: center;

  @media all and (min-width: 75em) {
    flex-direction: row;
    text-align: left;
  }
`;

const Social = styled.div`
  align-items: center;
  display: flex;
  text-transform: uppercase;
`;

const Links = styled.div`
  display: flex;
  margin-left: 20px;

  a {
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.20);
    border-radius: 50%;
    display: inline-flex;
    height: 32px;
    justify-content: center;
    margin-left: 10px;
    width: 32px;

    svg {
      max-width: 100%;
    }
  }
`;

class EndFooter extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <InnerContainer>
            <Copyright>
              <div>
                <p>© 2018 VeChain Foundation - All rights reserved.</p>
              </div>
              <Social>
                <p>Follow VeChain: </p>
                <Links>
                  <a href="https://twitter.com/vechainofficial?lang=en" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                  </a>
                  <a href="https://www.facebook.com/groups/VechainThor/about/" target="_blank" rel="noopener noreferrer">
                    <Facebook />
                  </a>
                  <a href="https://t.me/vechain_official_english" target="_blank" rel="noopener noreferrer">
                    <Telegram />
                  </a>
                </Links>
              </Social>
            </Copyright>
          </InnerContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default EndFooter;

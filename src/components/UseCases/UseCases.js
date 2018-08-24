import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Button';

import { Container, InnerContainer, Row, Col } from '../Layout';
import UseCase from '../UseCase';

import coldChain from './cold-chain.png';
import automobile from './automobile.png';
import luxury from './luxury.png';
import medical from './medical.png';
import bg from './bg.png';

const Wrapper = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;

  @media all and (min-width: 75em) {
    padding-top: 200px;
    margin-top: -120px;
  }
`;

const ModifiedRow = styled(Row)`
  margin-right: -25px;
  margin-left: -25px;
`;

const ModifiedCol = styled(Col)`
  ${({ lg }) => lg && `
    display: flex;
    padding-left: 25px;
    padding-right: 25px;
  `}
`;

class UseCases extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <InnerContainer>
            <h4>Featured use cases</h4>
            <ModifiedRow wrap>
              <ModifiedCol sm={1} lg={6}>
                <UseCase 
                  image={coldChain}
                  title="Cold-chain Logistics"
                  content="VeChain’s cold-chain logistics solution uses proprietary IoT devices to track key metrics throughout the entire journey. VeChain embeds data management and sharing in every process, making cold-chain logistics transparent, regulated, secure and reliable." />
              </ModifiedCol>
              <ModifiedCol sm={1} lg={6}>
                <UseCase 
                  image={automobile}
                  title="Automobile"
                  content="VeChain creates a digital passport of a vehicle recording all data including repair history, insurance, registration and even driver behaviour throughout its lifecycle. VeChain puts data into the hands of owners, making data management comprehensive, accessible and transparent." />
              </ModifiedCol>
            </ModifiedRow>
            <ModifiedRow>
              <ModifiedCol sm={1} lg={6}>
                <UseCase 
                  image={luxury}
                  title="Luxury & Fashion"
                  content="VeChain embeds smartchips within luxury goods, so brands can monitor their sales channels in realtime to prevent illegal overstock trading. Meanwhile, consumers can verify the authenticity of the luxury products. VeChain puts control back into the hands of brands, making luxury trail transparent, seamless and data-driven." />
              </ModifiedCol>
              <ModifiedCol sm={1} lg={6}>
                <UseCase 
                  image={medical}
                  title="Medical & Healthcare"
                  content="VeChain’s blockchain solution can track end-to-end production processes and use of medical device. With the patient’s authorization, VeChain can enable patients to securely share their biometric data with their doctors to enable realtime monitoring. VeChain makes the production and use of medical devices safer, better regulated, efficient" />
              </ModifiedCol>
            </ModifiedRow>
          </InnerContainer>
          <Button primary>More Use Cases</Button>
        </Container>
      </Wrapper>
    );
  }
}

export default UseCases;

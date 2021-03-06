import React, { Component } from 'react';
import styled from 'styled-components';

import TeamMember from '../TeamMember';
import { Row, Col } from '../Layout';
import list from './list';

const Wrapper = styled.div`
  margin-top: 50px;
`;

class TeamMembers extends Component {
  render() {
    return (
      <Wrapper>
        <Row willwrap>
          { list.slice(0, 4).map((member, index) => (
            <Col sm={6} lg={3} key={index}>
              <TeamMember {...member} />
            </Col>
          ))}
        </Row>
        <Row willwrap>
          { list.slice(4, 8).map((member, index) => (
            <Col sm={6} lg={3} key={index}>
              <TeamMember {...member} />
            </Col>
          ))}
        </Row>
        <Row willwrap>
          { list.slice(8, 12).map((member, index) => (
            <Col sm={6} lg={3} key={index}>
              <TeamMember {...member} />
            </Col>
          ))}
        </Row>
      </Wrapper>
    );
  }
}

export default TeamMembers;

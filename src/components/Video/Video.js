import React, { Component } from 'react';
import styled from 'styled-components';

import poster from './video-bg.png';

const Wrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0 8px 56px -13px rgba(29,17,86,0.76);

  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%); 
  -webkit-transform: rotate(0.000001deg); 
  -webkit-border-radius: 10px; 
  -moz-border-radius: 10px;
  border-radius: 10px; 
  overflow: hidden; 

  video {
    object-fit: cover;
    width: 100%;
  }
`;

class Video extends Component {
  render() {
    return (
      <Wrapper>
        <video controls poster={poster}>
          <source src="" type="video/mp4" />
        </video>
      </Wrapper>
    );
  }
}

export default Video;

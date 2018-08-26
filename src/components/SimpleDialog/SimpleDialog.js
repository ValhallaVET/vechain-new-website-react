import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import styled from 'styled-components';

const StyledDialog = styled(Dialog)`
  border-radius: 5px;
  box-shadow: 0 32px 42px 0 rgba(26, 22, 44, 0.05);
`;

class SimpleDialog extends Component {
  render() {
    const { onClose, open } = this.props;
    return (
      <StyledDialog onClose={onClose} open={open}>
        { this.props.children }
      </StyledDialog>
    );
  }
}

export default SimpleDialog;

import React from 'react';
import styled from 'styled-components';

const FullWidthBlock = styled.div`
  width: 100%;
`;

const FullWidthDiv = ({ children }, ...props) => {
  return (
    <FullWidthBlock {...props}>
      {children}
    </FullWidthBlock>
  );
};

export default FullWidthDiv;

import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  width: var(--break-lg);
  margin: 0 auto;

  @media (max-width: var(--break-lg)) {
    width: var(--break-md);
  }

  @media (max-width: var(--break-md)) {
    width: var(--break-sm);
  }

  @media (max-width: var(--break-sm)) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...props }) => {
  // style, className 등 props 전달하기 위해 ...props를 이용
  return <ResponsiveBlock {...props}>{children}</ResponsiveBlock>;
};

export default Responsive;

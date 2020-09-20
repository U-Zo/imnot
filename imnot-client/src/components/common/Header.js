import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  display: flex;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white);
  box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
  font-size: var(--font-size-18);
  padding: 0 2rem;
`;

const Header = () => {
  return (
    <HeaderBlock>
      ICON
    </HeaderBlock>
  );
};

export default Header;

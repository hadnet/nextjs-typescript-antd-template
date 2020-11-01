import React from 'react';
import styled from 'styled-components';

export function Footer({children}: {children?: React.ReactNode}) {
  return <StyledFooter>{children}</StyledFooter>;
}

const StyledFooter = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid ${props => props.theme.dark.border};
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    margin-left: 0.5rem;
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

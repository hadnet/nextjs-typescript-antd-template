import styled from 'styled-components';

export const Title = styled.h1`
  margin: 0;
  text-align: center;
  line-height: 1.15;
  font-size: 4rem;

  & a {
    color: ${props => props.theme.dark.primary};
    text-decoration: none;
  }

  & a:hover,
  & a:focus,
  & a:active {
    text-decoration: underline;
  }
`;

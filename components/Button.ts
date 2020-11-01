import styled from 'styled-components';
import {Button as AntdButton} from 'antd';

export const Button = styled(AntdButton)`
  background: ${props => props.theme.secondary} !important;
  border-color: ${props => props.theme.secondary} !important;
  &:hover {
    background: ${props => props.theme.secondaryHover} !important;
  }
  &:active {
    background: ${props => props.theme.secondaryActive} !important;
  }
`;

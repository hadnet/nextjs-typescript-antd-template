import styled from 'styled-components';
import {Button as AntdButton} from 'antd';

export const Button = styled(AntdButton)`
  background: ${props => props.theme.dark.primary} !important;
  border-color: ${props => props.theme.dark.primary} !important;
`;

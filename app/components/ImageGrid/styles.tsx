import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const itemWidth = (Dimensions.get('window').width - 110) / 2.7;
const itemHeight = itemWidth * 1.322;

export const Item = styled.View`
  padding-horizontal: 10px;
  padding-vertical: 15px;
  margin-vertical: 0px;
  margin-horizontal: 0px;
`;

export const Image = styled.Image`
  width: ${itemWidth}px;
  height: ${itemHeight}px;
  border-radius: 2px;
`;

import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const BodyContainer = styled.View`
  background-color: #ffdd0d;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;
`;

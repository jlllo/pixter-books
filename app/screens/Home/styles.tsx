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

export const Text = styled.Text`
  font-family: Roboto;
  font-size: 24px;
  margin: 8px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #000;
  padding: 8px 20px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-family: Roboto;
  font-size: 16px;
  color: #fff;
`;

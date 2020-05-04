import Constants from 'expo-constants';
import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: ${Constants.statusBarHeight + 50}px;
  background: #ffdd0d;
  width: 100%;
`;

export const TitleContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  height: 75%;
  width: 35%;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
`;

export const Divider = styled.View`
  background-color: #f0d10f;
  width: 35%;
  height: 2px;
`;

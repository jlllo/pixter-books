import Constants from 'expo-constants';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  background: #ffdd0d;
  width: 100%;
`;

export const TitleContainer = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  height: 50px;
`;

export const HeaderContainerLeft = styled.View`
  position: absolute;
  top: ${Constants.statusBarHeight - 5}px;
  left: 20px;
`;

export const HeaderContainerRight = styled.View`
  position: absolute;
  top: ${Constants.statusBarHeight - 5}px;
  right: 20px;
`;

export const SearchInputContainer = styled.View`
  padding: 5px;
  width: 100%;
  position: absolute;
  bottom: 0px;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
`;

export const Divider = styled.View`
  background-color: #f0d10f;
  margin-top: 15px;
  width: 35%;
  height: 2px;
`;

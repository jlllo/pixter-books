import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const BodyContainer = styled.View`
  background-color: #ffdd0d;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${Dimensions.get('window').height - 93}px;
  width: ${Dimensions.get('window').width}px;
  padding-left: 0px;
`;

export const LoadingContainer = styled.View`
  height: 25%;
`;

export const NotificationsButton = styled.View`
  justify-content: center;
  align-items: center;
  padding: 4px;
`;

export const NewNotifications = styled.View`
  background-color: tomato;
  width: 8px;
  height: 8px;
  border-radius: 15px;
  position: absolute;
  left: 7px;
  bottom: 18px;
`;

export const FooterLoadingContainer = styled.View`
  height: 90px;
  justify-content: center;
  align-items: center;
`;

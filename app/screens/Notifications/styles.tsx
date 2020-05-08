import styled from 'styled-components/native';

export const MainContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #ffdd0d;
  height: 100%;
`;

// WRAPPERS

export const ListWrapper = styled.View`
  margin-bottom: 75px;
`;

export const NotificationItem = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #e1dca6;
  align-self: center;
  width: 94%;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  elevation: 1;
  margin-bottom: 15px;
  padding: 15px 20px;
`;

export const FooterNotification = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0px 0px 0px;
`;

// COMPONENTS

export const TextNotifications = styled.Text`
  font-family: Roboto;
  font-size: 14px;
  line-height: 20px;
  color: #2c2605;
  text-align: justify;
  opacity: 0.7;
`;

export const TimeNotifications = styled.Text`
  font-family: Roboto;
  font-size: 11px;
  line-height: 11px;
  color: #2c2605;
  width: 95%;
  text-align: left;
  opacity: 0.7;
`;

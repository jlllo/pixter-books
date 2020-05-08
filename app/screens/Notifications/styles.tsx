import styled from 'styled-components/native';

export const MainContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #ffdd0d;
  padding-bottom: 90px;
`;

// WRAPPERS

export const NotificationItem = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #eee;
  align-self: center;
  width: 95%;
  border-radius: 13px;
  elevation: 2;
  margin-bottom: 15px;
  opacity: 0.7;
`;

// COMPONENTS

export const TextNotifications = styled.Text`
  font-family: Roboto;
  font-size: 15px;
  line-height: 30px;
  color: #2c2605;
  padding: 20px;
  text-align: justify;
`;

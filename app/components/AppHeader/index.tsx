import Constants from 'expo-constants';
import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Divider } from './styles';

export interface AppHeaderProps {
  barStyle: 'default' | 'light-content' | 'dark-content' | undefined;
  backgroundColor: string;
}

export default function AppHeader({
  barStyle,
  backgroundColor,
}: AppHeaderProps) {
  return (
    <Container
      style={{
        height: Constants.statusBarHeight + 8,
      }}
    >
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      <Divider />
    </Container>
  );
}

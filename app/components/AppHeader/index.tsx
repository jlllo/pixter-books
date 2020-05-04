import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Divider, Title, TitleContainer } from './styles';

export interface AppHeaderProps {
  title: string;
  barStyle: string;
}

export default function AppHeader({ title, barStyle }: AppHeaderProps) {
  return (
    <Container>
      <StatusBar barStyle='dark-content' backgroundColor='#ffdd0d' />

      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Divider />
    </Container>
  );
}

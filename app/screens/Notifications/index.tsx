import React, { useEffect, useLayoutEffect } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../../components/AppHeader';
import {
  HeaderContainerLeft,
  Title,
  TitleContainer,
} from '../../components/AppHeader/styles';
import { loadRequest } from '../../store/ducks/BooksData/actions';
import { AppState } from '../../store/ducks/types';
import {
  NotificationsScreenNavigationProp,
  NotificationsScreenRouteProp,
} from '../../types';
import { MainContainer, NotificationItem, TextNotifications } from './styles';

interface Props {
  route: NotificationsScreenRouteProp;
  navigation: NotificationsScreenNavigationProp;
}

export default function Notifications({ route, navigation }: Props) {
  const { notifications } = useSelector((state: AppState) => state.placesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TitleContainer>
          <Title>Notifications</Title>
        </TitleContainer>
      ),
      headerLeft: () => (
        <HeaderContainerLeft>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon size={30} name='keyboard-backspace' color='#000' />
          </TouchableOpacity>
        </HeaderContainerLeft>
      ),
      headerStyle: {
        backgroundColor: '#FFDD0D',
        elevation: 0,
      },
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <AppHeader barStyle='dark-content' backgroundColor='#ffdd0d' />

      <MainContainer>
        <FlatList
          data={notifications}
          renderItem={({ item }) => (
            <NotificationItem>
              <TextNotifications>{item}</TextNotifications>
            </NotificationItem>
          )}
          keyExtractor={item => String(notifications.indexOf(item))}
          showsVerticalScrollIndicator
        />
      </MainContainer>
    </SafeAreaView>
  );
}

import React, { useEffect, useLayoutEffect } from 'react';
import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../../components/AppHeader';
import {
  HeaderContainerLeft,
  Title,
  TitleContainer,
} from '../../components/AppHeader/styles';
import { formatTime } from '../../services/Time';
import { loadRequest as loadPlaces } from '../../store/ducks/PlacesData/actions';
import { AppState } from '../../store/ducks/types';
import {
  NotificationsScreenNavigationProp,
  NotificationsScreenRouteProp,
} from '../../types';
import {
  FooterNotification,
  ListWrapper,
  MainContainer,
  NotificationItem,
  TextNotifications,
  TimeNotifications,
} from './styles';

interface Props {
  route: NotificationsScreenRouteProp;
  navigation: NotificationsScreenNavigationProp;
}

export default function Notifications({ route, navigation }: Props) {
  const { notifications } = useSelector((state: AppState) => state.placesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlaces());
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
            <Icon size={25} name='keyboard-backspace' color='#000' />
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
        <ListWrapper>
          {notifications.length > 0 ? (
            <FlatList
              data={notifications}
              renderItem={({ item }) => (
                <NotificationItem>
                  <TextNotifications>{item.message}</TextNotifications>
                  <FooterNotification>
                    <TimeNotifications>{`${formatTime(
                      item.timestamp
                    )}`}</TimeNotifications>
                    <Icon size={15} name='done-all' color='#4caf50' />
                  </FooterNotification>
                </NotificationItem>
              )}
              keyExtractor={item => String(notifications.indexOf(item))}
              showsVerticalScrollIndicator
            />
          ) : (
            <TextNotifications>Any book store nearby.</TextNotifications>
          )}
        </ListWrapper>
      </MainContainer>
    </SafeAreaView>
  );
}

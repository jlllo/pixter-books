import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BooksData } from '../store/ducks/BooksData/types';

export type RootStackParamList = {
  Books: undefined;
  Details: BooksData;
  Notifications: undefined;
};

// DETAILS SCREEN

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

// NOTIFICATIONS SCREEN

export type NotificationsScreenRouteProp = RouteProp<
  RootStackParamList,
  'Notifications'
>;

export type NotificationsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Notifications'
>;

// BOOKS SCREENS

export type BooksScreenRouteProp = RouteProp<RootStackParamList, 'Books'>;

export type BooksScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Books'
>;

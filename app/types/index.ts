import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BooksData } from '../store/ducks/BooksData/types';

export type RootStackParamList = {
  Books: undefined;
  Details: BooksData;
  Notifications: undefined;
};

// SCREEN NAVIGATION TYPES

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

export type NotificationsScreenRouteProp = RouteProp<
  RootStackParamList,
  'Notifications'
>;

export type NotificationsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Notifications'
>;

export type BooksScreenRouteProp = RouteProp<RootStackParamList, 'Books'>;

export type BooksScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Books'
>;

// STYLED COMPONENTS TYPES

export interface NewNotificationsProps {
  show: boolean;
}

// TASKS TYPES

export interface TaskProps {
  data: any;
  error: any;
}

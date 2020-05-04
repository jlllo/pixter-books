import { action } from 'typesafe-actions';
import { BookStoreData, PlacesTypes } from './types';

export const loadRequest = () => action(PlacesTypes.PLACES_REQUEST);

export const loadSuccess = (data: BookStoreData[]) =>
  action(PlacesTypes.PLACES_SUCCESS, data);

export const loadFailure = () => action(PlacesTypes.PLACES_FAILURE);

export const setNotifications = (notifications: string[]) =>
  action(PlacesTypes.SET_NOTIFICATIONS, notifications);

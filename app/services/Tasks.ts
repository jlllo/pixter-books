import { TaskProps } from '../types';
import { LOCATION_RADIUS } from './Constants';
import {
  registerAndGetPushTokenAsync,
  sendNotifications,
} from './Notifications';
import PlacesAPI, { setAxiosData } from './PlacesAPI';
import { getNotifications, treatPlaces } from './Utils';

export const pushNotificationsTask = async ({ data, error }: TaskProps) => {
  if (error) {
    console.log('locations error', error);
    return;
  }
  if (data) {
    const { locations } = data;

    if (locations) {
      if (locations.length > 0) {
        const { latitude, longitude } = locations.pop().coords;
        const radius = LOCATION_RADIUS;
        const type = 'book_store';
        const requestData = setAxiosData(latitude, longitude, radius, type);

        const response = await PlacesAPI.get(
          '/place/nearbysearch/json',
          requestData
        );

        const places = treatPlaces(response.data.results);
        const notifications = getNotifications(places);
        const expoPushToken = await registerAndGetPushTokenAsync();

        if (expoPushToken) {
          sendNotifications(notifications, expoPushToken);
        }
      }
    }
  }
};

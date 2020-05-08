import { Notifications } from 'expo';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Platform, Vibration } from 'react-native';
import { NotificationsData } from '../store/ducks/PlacesData/types';

export const registerAndGetPushTokenAsync = async () => {
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }

    const token = await Notifications.getExpoPushTokenAsync();
    return token;
  } else {
    alert('Must use physical device for Push Notifications');
    return false;
  }
};

export const sendPushNotification = async (
  notification: string,
  expoPushToken: string
) => {
  Vibration.vibrate(200);

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: expoPushToken,
      sound: 'default',
      title: 'Nearby Book Store 📚🏃🚶',
      body: `${notification}`,
      data: {},
      _displayInForeground: true,
    }),
  });
};

export const sendNotifications = (
  notifications: NotificationsData[],
  expoPushToken: string
) =>
  notifications.length > 0 &&
  notifications.map(
    async notification =>
      await sendPushNotification(notification.message, expoPushToken)
  );

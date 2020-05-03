import axios from 'axios';
import { PLACES_API_KEY } from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
});

export default api;

export const setAxiosData = (
  lat: number,
  lon: number,
  radius: number,
  type: string
) => {
  const data = {
    params: {
      location: `${lat},${lon}`,
      radius,
      type,
      key: PLACES_API_KEY,
    },
  };

  return data;
};

import * as Location from 'expo-location';
import { call, put, select } from 'redux-saga/effects';
import PlacesAPI, { setAxiosData } from '../../../services/PlacesAPI';
import { getNotifications, treatPlaces } from '../../../services/Utils';
import { AppState } from '../types';
import { loadFailure, loadSuccess, setNotifications } from './actions';

const getPlaces = (state: AppState) => state.placesData;

export function* loadPlaces() {
  const placesData = yield select(getPlaces);
  const { radius, type } = placesData.options;

  try {
    const status = yield call(Location.requestPermissionsAsync);

    if (status) {
      const { coords } = yield call(Location.getCurrentPositionAsync, {});
      const { latitude, longitude } = coords;

      const requestData = setAxiosData(latitude, longitude, radius, type);

      const response = yield call(
        PlacesAPI.get,
        '/place/nearbysearch/json',
        requestData
      );

      const places = treatPlaces(response.data.results);
      const notifications = getNotifications(places);

      console.log(places, notifications);

      yield put(setNotifications(notifications));
      yield put(loadSuccess(places));
    } else {
      yield put(loadFailure());
    }
  } catch (err) {
    yield put(loadFailure());
  }
}

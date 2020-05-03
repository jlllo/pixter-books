import { all, select, takeLatest } from 'redux-saga/effects';
import { loadBooks } from './BooksData/sagas';
import { BooksTypes } from './BooksData/types';
import { loadPlaces } from './PlacesData/sagas';
import { PlacesTypes } from './PlacesData/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(PlacesTypes.SET_LOADING, loadPlaces, yield select()),
    takeLatest(BooksTypes.SET_LOADING, loadBooks, yield select()),
  ]);
}

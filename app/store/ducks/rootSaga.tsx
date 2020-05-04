import { all, takeLatest } from 'redux-saga/effects';
import { loadBooks } from './BooksData/sagas';
import { BooksTypes } from './BooksData/types';
import { loadPlaces } from './PlacesData/sagas';
import { PlacesTypes } from './PlacesData/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(PlacesTypes.PLACES_REQUEST, loadPlaces),
    takeLatest(BooksTypes.BOOKS_REQUEST, loadBooks),
    takeLatest(BooksTypes.SET_INDEX, loadBooks),
  ]);
}

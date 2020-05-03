import { call, put } from 'redux-saga/effects';
import BooksAPI from '../../../services/BooksAPI';
import { organizeBooks } from '../../../services/Utils';
import { AppState } from '../types';
import { loadFailure, loadSuccess } from './actions';

export function* loadBooks(state: AppState) {
  const { search, searchIndex } = state.booksData;

  try {
    const response = yield call(BooksAPI.get, '/volumes', {
      params: {
        q: search,
        maxResults: 40,
        startIndex: searchIndex,
        printType: 'books',
      },
    });

    const books = organizeBooks(response.data.items);

    yield put(loadSuccess(books));
  } catch (err) {
    yield put(loadFailure());
  }
}

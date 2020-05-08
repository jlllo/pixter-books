import { call, put, select } from 'redux-saga/effects';
import BooksAPI from '../../../services/BooksAPI';
import { organizeBooks } from '../../../services/Utils';
import { AppState } from '../types';
import { loadFailure, loadSuccess, setTotal } from './actions';

const getBooks = (state: AppState) => state.booksData;

export function* loadBooks() {
  const { data, search, maxResults, startIndex } = yield select(getBooks);

  try {
    const response = yield call(BooksAPI.get, '/volumes', {
      params: {
        q: search,
        maxResults,
        startIndex,
        printType: 'books',
      },
    });

    const books = organizeBooks(response.data.items);

    yield put(setTotal(response.data.totalItems));
    yield put(loadSuccess([...data, ...books]));
  } catch (err) {
    yield put(loadFailure());
  }
}

import { call, put, select } from 'redux-saga/effects';
import BooksAPI from '../../../services/BooksAPI';
import { organizeBooks } from '../../../services/Utils';
import { AppState } from '../types';
import { loadFailure, loadSuccess } from './actions';

const getBooks = (state: AppState) => state.booksData;

export function* loadBooks() {
  const booksData = yield select(getBooks);
  const { data, search, maxResults, searchIndex } = booksData;

  try {
    const response = yield call(BooksAPI.get, '/volumes', {
      params: {
        q: search,
        maxResults,
        startIndex: searchIndex,
        printType: 'books',
      },
    });

    const books = organizeBooks(response.data.items);

    yield put(loadSuccess(data.concat(books)));
  } catch (err) {
    console.log(err);
    yield put(loadFailure());
  }
}

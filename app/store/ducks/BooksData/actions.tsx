import { action } from 'typesafe-actions';
import { BooksData, BooksTypes } from './types';

export const setSearch = (search: string) =>
  action(BooksTypes.SET_SEARCH, search);

export const setFavorite = (index: number) =>
  action(BooksTypes.SET_FAVORITE, index);

export const setIndex = (index: number) => action(BooksTypes.SET_INDEX, index);

export const loadRequest = () => action(BooksTypes.BOOKS_REQUEST);

export const loadSuccess = (data: BooksData[]) =>
  action(BooksTypes.BOOKS_SUCCESS, data);

export const loadFailure = () => action(BooksTypes.BOOKS_FAILURE);

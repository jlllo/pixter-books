import { action } from 'typesafe-actions';
import { BooksData, BooksTypes } from './types';

export const setFavorite = (index: number) =>
  action(BooksTypes.SET_FAVORITE, index);

export const setBooks = (data: BooksData[]) =>
  action(BooksTypes.SET_BOOKS, data);

export const setSearch = (search: string) =>
  action(BooksTypes.SET_SEARCH, search);

export enum BooksTypes {
  SET_LOADING = '$_PIXTER_BOOKS/SET_LOADING',
  SET_SEARCH = '$_PIXTER_BOOKS/SET_SEARCH',
  SET_FAVORITE = '$_PIXTER_BOOKS/SET_FAVORITE',
  BOOKS_REQUEST = '$_PIXTER_BOOKS/BOOKS_REQUEST',
  BOOKS_SUCCESS = '$_PIXTER_BOOKS/BOOKS_SUCESS',
  BOOKS_FAILURE = '$_PIXTER_BOOKS/BOOKS_FAILURE',
}

export interface BooksData {
  title: string;
  authors: string[];
  thumbnail: string;
  pages: string;
  averageRating: number;
  isFavorite: boolean;
}

export interface BooksDataState {
  data: BooksData[];
  search: string;
  searchIndex: number;
  loading: boolean;
  error: boolean;
}

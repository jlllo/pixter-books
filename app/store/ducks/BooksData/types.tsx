export enum BooksTypes {
  SET_LOADING = '$_PIXTER_BOOKS/SET_LOADING',
  SET_SEARCH = '$_PIXTER_BOOKS/SET_SEARCH',
  SET_FAVORITE = '$_PIXTER_BOOKS/SET_FAVORITE',
  SET_INDEX = '$_PIXTER_BOOKS/SET_INDEX',
  BOOKS_REQUEST = '$_PIXTER_BOOKS/BOOKS_REQUEST',
  BOOKS_SUCCESS = '$_PIXTER_BOOKS/BOOKS_SUCESS',
  BOOKS_FAILURE = '$_PIXTER_BOOKS/BOOKS_FAILURE',
}

export interface BooksData {
  title: string;
  description: string;
  authors: string[];
  thumbnail: string;
  pages: string;
  averageRating: number;
  isFavorite: boolean;
  price: number;
}

export interface BooksDataState {
  data: BooksData[];
  search: string;
  maxResults: number;
  searchIndex: number;
  loading: boolean;
  error: boolean;
}

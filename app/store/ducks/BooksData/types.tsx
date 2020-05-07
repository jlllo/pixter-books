export enum BooksTypes {
  SET_LOADING = '$_PIXTER_BOOKS/SET_LOADING',
  SET_TOTAL = '$_PIXTER_BOOKS/SET_TOTAL',
  SET_SEARCH = '$_PIXTER_BOOKS/SET_SEARCH',
  SET_FAVORITE = '$_PIXTER_BOOKS/SET_FAVORITE',
  SET_INDEX = '$_PIXTER_BOOKS/SET_INDEX',
  BOOKS_REQUEST = '$_PIXTER_BOOKS/BOOKS_REQUEST',
  BOOKS_SUCCESS = '$_PIXTER_BOOKS/BOOKS_SUCESS',
  BOOKS_FAILURE = '$_PIXTER_BOOKS/BOOKS_FAILURE',
}

export interface BooksData {
  title: string;
  subtitle: string;
  description: string;
  authors: string[];
  thumbnail: string;
  pages: string;
  averageRating: number;
  isFavorite: boolean;
  forSale: boolean;
  price: number;
  currency: string;
}

export interface BooksDataState {
  data: BooksData[];
  totalItems: number;
  search: string;
  maxResults: number;
  startIndex: number;
  loading: boolean;
  error: boolean;
}

export interface BooksData {
  title: string;
  author: string;
  thumbnail: string;
  pages: string;
  averageRating: number;
  isFavorite: boolean;
}

export interface BooksDataState {
  data: BooksData[];
  search: string;
}

export enum BooksTypes {
  SET_SEARCH = '$_PIXTER_BOOKS/SET_SEARCH',
  SET_BOOKS = '$_PIXTER_BOOKS/SET_BOOKS',
  SET_FAVORITE = '$_PIXTER_BOOKS/SET_FAVORITE',
}

export interface AppState {
  booksData: BooksDataState;
}

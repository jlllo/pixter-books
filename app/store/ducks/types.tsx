import { BooksDataState } from './BooksData/types';
import { PlacesDataState } from './PlacesData/types';

export interface AppState {
  booksData: BooksDataState;
  placesData: PlacesDataState;
}

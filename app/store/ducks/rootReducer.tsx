import { combineReducers } from 'redux';
import booksData from './BooksData';
import placesData from './PlacesData';

export default combineReducers({
  booksData,
  placesData,
});

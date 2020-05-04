import { Reducer } from 'redux';
import { BooksDataState, BooksTypes } from './types';

const INITIAL_STATE: BooksDataState = {
  data: [],
  search: 'Design+Thinking',
  maxResults: 30,
  searchIndex: 0,
  loading: true,
  error: false,
};

const reducer: Reducer<BooksDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BooksTypes.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    case BooksTypes.SET_FAVORITE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload]: {
            ...state.data[action.payload],
            isFavorite: true,
          },
        },
      };

    case BooksTypes.SET_INDEX:
      return {
        ...state,
        searchIndex: action.payload,
      };

    case BooksTypes.BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case BooksTypes.BOOKS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };

    case BooksTypes.BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;

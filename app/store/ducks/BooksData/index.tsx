import { Reducer } from 'redux';
import { BooksDataState, BooksTypes } from './types';

const INITIAL_STATE: BooksDataState = {
  data: [],
  totalItems: 0,
  search: 'UX+Design',
  maxResults: 30,
  startIndex: 0,
  loading: true,
  error: false,
};

const reducer: Reducer<BooksDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BooksTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case BooksTypes.SET_TOTAL:
      return {
        ...state,
        totalItems: action.payload,
      };

    case BooksTypes.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
        startIndex: 0,
        data: [],
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
        startIndex: action.payload,
      };

    case BooksTypes.BOOKS_REQUEST:
      return {
        ...state,
        data: [],
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

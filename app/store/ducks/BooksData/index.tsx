import { Reducer } from 'redux';
import { BooksDataState, BooksTypes } from './types';

export const INITIAL_STATE: BooksDataState = {
  data: [],
  search: 'UI+Designer',
};

const reducer: Reducer<BooksDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BooksTypes.SET_SEARCH:
      return {
        ...state,
        search: action.payload.search,
      };

    case BooksTypes.SET_BOOKS:
      return {
        ...state,
        data: action.payload.data,
      };

    case BooksTypes.SET_FAVORITE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.index]: {
            ...state.data[action.payload.index],
            isFavorite: true,
          },
        },
      };

    default:
      return state;
  }
};

export default reducer;

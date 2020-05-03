import { Reducer } from 'redux';
import { PlacesDataState, PlacesTypes } from './types';

const INITIAL_STATE: PlacesDataState = {
  data: [],
  notifications: [],
  options: {
    radius: 4000,
    type: 'book_store',
  },
  loading: true,
  error: false,
};

const reducer: Reducer<PlacesDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlacesTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case PlacesTypes.PLACES_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case PlacesTypes.PLACES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };

    case PlacesTypes.PLACES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case PlacesTypes.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
};

export default reducer;

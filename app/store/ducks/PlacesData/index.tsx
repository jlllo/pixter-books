import { Reducer } from 'redux';
import { LOCATION_RADIUS } from '../../../services/Constants';
import { PlacesDataState, PlacesTypes } from './types';

const INITIAL_STATE: PlacesDataState = {
  places: [],
  notifications: [],
  options: {
    radius: LOCATION_RADIUS,
    type: 'book_store',
  },
  loading: true,
  error: false,
};

const reducer: Reducer<PlacesDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlacesTypes.PLACES_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case PlacesTypes.PLACES_SUCCESS:
      return {
        ...state,
        places: action.payload,
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

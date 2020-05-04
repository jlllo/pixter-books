export enum PlacesTypes {
  PLACES_REQUEST = '$_PIXTER_BOOKS/PLACES_REQUEST',
  PLACES_SUCCESS = '$_PIXTER_BOOKS/PLACES_SUCCESS',
  PLACES_FAILURE = '$_PIXTER_BOOKS/PLACES_FAILURE',
  SET_NOTIFICATIONS = '$_PIXTER_BOOKS/SET_NOTIFICATIONS',
}

export interface BookStoreData {
  name: string;
  address: string;
  lat: number;
  lon: number;
}

export interface OptionsData {
  radius: number;
  type: string;
}

export interface PlacesDataState {
  data: BookStoreData[];
  notifications: string[];
  options: OptionsData;
  loading: boolean;
  error: boolean;
}

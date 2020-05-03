import { BookStoreData } from '../store/ducks/PlacesData/types';

export const organizeBooks = (items: []) =>
  items.map((item: any) => ({
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
    thumbnail: item.volumeInfo.imageLinks.smallThumbnail,
    pages: item.volumeInfo.pageCount,
    averageRating: item.volumeInfo.averageRating,
    isFavorite: false,
  }));

export const treatPlaces = (places: []) =>
  places.map((place: any) => ({
    name: place.name,
    address: place.vicinity,
    lat: place.geometry.location.lat,
    lon: place.geometry.location.lng,
  }));

export const getNotifications = (places: BookStoreData[]) =>
  places.map(
    (place: BookStoreData) =>
      `Buy your favorite books now, ${place.name} is near here`
  );

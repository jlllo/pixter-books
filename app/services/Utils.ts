import { BookStoreData } from '../store/ducks/PlacesData/types';

export const organizeBooks = (items: []) =>
  items.map((item: any) => ({
    title: item.volumeInfo.title,
    subtitle: item.volumeInfo.subtitle,
    description: item.volumeInfo.description,
    authors:
      typeof item.volumeInfo.authors == 'undefined'
        ? null
        : item.volumeInfo.authors,
    thumbnail:
      typeof item.volumeInfo.imageLinks == 'undefined'
        ? 'https://books.google.com.br/googlebooks/images/no_cover_thumb.gif'
        : item.volumeInfo.imageLinks.thumbnail,
    pages: item.volumeInfo.pageCount,
    averageRating: item.volumeInfo.averageRating,
    isFavorite: false,
    forSale: item.saleInfo.saleability == 'FOR_SALE',
    price:
      typeof item.saleInfo == 'undefined'
        ? 0
        : typeof item.saleInfo.listPrice == 'undefined'
        ? 0
        : item.saleInfo.listPrice.amount,
    currency:
      typeof item.saleinfo == 'undefined'
        ? ''
        : item.saleinfo.listPrice.currencyCode,
  }));

export const treatPlaces = (places: []) =>
  places.map((place: any) => ({
    name: place.name,
    address: place.vicinity,
    lat: place.geometry.location.lat,
    lon: place.geometry.location.lng,
  }));

export const getNotifications = (places: BookStoreData[]) =>
  places.map((place: BookStoreData) => ({
    message: `Buy your favorite books now, ${place.name} is near here.`,
    timestamp: new Date().getTime(),
  }));

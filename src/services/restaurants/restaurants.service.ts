import camelize from 'camelize';
import { mocks, mockImages } from './mock';

interface Mocks {
  [key: string]: any;
}
interface RestaurantData {
  results: any[];
}

export const restaurantRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise<RestaurantData>((resolve, reject) => {
    const mock = (mocks as Mocks)[location];
    if (!mock) {
      reject(new Error('not found'));
    }
    resolve(mock);
  });
};

export const restaurantTranform = ({ results }: { results: any[] }) => {
  const mappedResult = results.map(restaurant => {
    restaurant.photos = restaurant.photos.map((p: any) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      isOpenNow: restaurant.opening_hours?.open_now,
    };
  });
  return camelize(mappedResult as any);
};

import { useState, useMemo, useEffect, createContext } from 'react';

import { restaurantRequest, restaurantTranform } from './restaurants.service';

// ----------------------------------------------------------------------------

export const RestaurantsContext = createContext({
  restaurants: [] as any[],
  isLoading: false,
  error: null,
});

export const RestaurantsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantRequest()
        .then(restaurantTranform)
        .then(results => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  const contextValue = useMemo(() => ({
    restaurants,
    isLoading,
    error,
  }), [restaurants, isLoading, error]);

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={contextValue}>
      {children}
    </RestaurantsContext.Provider>
  );
};

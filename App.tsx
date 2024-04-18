import React from 'react';
import { StatusBar } from 'react-native';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

// ----------------------------------------------------------------------------

function App(): React.JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}

export default App;

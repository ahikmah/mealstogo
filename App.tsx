import React from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { theme } from './src/infrastructure/theme';

import { SafeArea } from './src/components/utility/safe-area.component';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

// ----------------------------------------------------------------------------
const Tab = createBottomTabNavigator();

function SettingsScreen(): React.JSX.Element {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

function MapScreen(): React.JSX.Element {
  return (
    <SafeArea>
      <Text>Map!</Text>
    </SafeArea>
  );
}

const ICON_MAP = {
  Restaurant: 'silverware',
  Map: 'map',
  Settings: 'cog',
};

const tabBarIcon =
  ({ route }) =>
  ({ color, size }) => {
    const iconName = ICON_MAP[route.name] || '';
    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
  };

function MyTabs(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: tabBarIcon({ route }),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    </>
  );
}

export default App;

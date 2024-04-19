import React from 'react';
import styled, { DefaultTheme } from 'styled-components/native';
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';

import RestaurantInfoCard from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
// ----------------------------------------------------------------------------

const SearchContainer = styled(View)`
  padding: ${(props: { theme: DefaultTheme }) => props.theme.space[3]};
`;

// ----------------------------------------------------------------------------

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" value="" />
      </SearchContainer>

      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item: { name: any }) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
}

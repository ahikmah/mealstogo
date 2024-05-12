import React, { useContext } from 'react';
import styled, { DefaultTheme } from 'styled-components/native';
import { FlatList } from 'react-native';
import { Searchbar, ActivityIndicator, MD2Colors } from 'react-native-paper';

import RestaurantInfoCard from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurant.context';
// ----------------------------------------------------------------------------

const SearchContainer = styled.View`
  padding: ${(props: { theme: DefaultTheme }) => props.theme.space[3]};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
  margin-top: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

// ----------------------------------------------------------------------------

export default function RestaurantsScreen() {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" value="" />
      </SearchContainer>

      {isLoading ? (
        <LoadingContainer>
          <Loading
            size={50}
            animating
            color={MD2Colors.red800}
            style={{ marginLeft: -25, marginTop: -25 }}
          />
        </LoadingContainer>
      ) : (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item: any) => item.name}
        />
      )}
    </SafeArea>
  );
}

import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Card } from 'react-native-paper';

import { Text } from '../../../components/typography/text.component';
import {
  RestaurantCard,
  Info,
  Row,
  Rating,
  RightSection,
  Icon,
} from './restaurant-info-card.styles';

import start from '../../../assets/icons/star';
import open from '../../../assets/icons/open';

// -----------------------------------------------------------------------

function RestaurantInfoCard({ restaurant }: Props): React.JSX.Element {
  return (
    <RestaurantCard>
      <Card.Cover
        key={restaurant.name}
        source={{ uri: restaurant.photos[0] }}
      />
      <Info>
        <Text variant="title">{restaurant.name}</Text>
        <Row>
          <Rating>
            {Array.from(new Array(Math.floor(restaurant.rating))).map(
              (_, index) => (
                <SvgXml
                  key={`star-${index.toString()}`}
                  xml={start}
                  width={20}
                  height={20}
                />
              ),
            )}
          </Rating>

          <RightSection>
            {restaurant.isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {restaurant.isOpenNow && (
              <SvgXml xml={open} width={30} height={30} />
            )}

            <Icon source={{ uri: restaurant.icon }} />
          </RightSection>
        </Row>
        <Text variant="caption">{restaurant.address}</Text>
      </Info>
    </RestaurantCard>
  );
}

type Props = {
  restaurant: {
    name: string;
    icon: string;
    photos: string[];
    address: string;
    isOpenNow: boolean;
    rating: number;
    isClosedTemporarily: boolean;
  };
};

// default value
RestaurantInfoCard.defaultProps = {
  restaurant: {
    name: 'Honu Coffee',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg',
    ],
    address: '100 Some Random Street',
    isOpenNow: true,
    rating: 5,
    isClosedTemporarily: true,
  },
};
export default RestaurantInfoCard;

import styled, { DefaultTheme } from 'styled-components/native';
import { Card } from 'react-native-paper';

// ----------------------------------------------------------------------------

export const RestaurantCard = styled(Card)`
  background-color: ${(props: { theme: DefaultTheme }) =>
    props.theme.colors.bg.primary};
  padding: ${(props: { theme: DefaultTheme }) => props.theme.space[3]};
  margin-bottom: ${(props: { theme: DefaultTheme }) => props.theme.space[3]};
`;

export const Info = styled.View`
  padding: ${(props: { theme: DefaultTheme }) => props.theme.space[2]};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props: { theme: DefaultTheme }) => props.theme.space[2]};
  padding-bottom: ${(props: { theme: DefaultTheme }) => props.theme.space[2]};
`;

export const RightSection = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${(props: { theme: DefaultTheme }) => props.theme.space[2]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

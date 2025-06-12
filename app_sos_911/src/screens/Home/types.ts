//types.ts

import { NavigationProp } from '@react-navigation/native';

export type HomeStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export interface HomeScreenProps {
  navigation: NavigationProp<HomeStackParamList, 'Home'>;
}
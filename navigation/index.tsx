import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, ImageBackground,StyleSheet,Dimensions } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator, { StackNavigator } from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import TabOneScreen from '../screens/TabOneScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import { Content, Container, Header, Text, View, Card, CardItem, Body, Button } from 'native-base';

const imageURL = require('../assets/music-audio-alp-201709.jpg');
// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const HeaderElement = () => (
    <ImageBackground source={{ uri: imageURL }} style={styles.headerImage} >
      <Text style={styles.title}>Tienda e-commerce</Text>
    </ImageBackground>
)

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerTitle: () => HeaderElement(), headerLeft: null }}>
      <Stack.Screen name="Home" component={TabOneScreen} />
      <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  headerImage: {  flex: 1, alignItems: 'center', justifyContent: 'center' },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: 'Home',
      ItemDetailScreen: 'Detail',
      NotFound: '*',
    },
  },
};

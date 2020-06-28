import * as React from 'react';
import { StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import { Content, Container, Header, Text, View } from 'native-base';


const imageURL = require('../assets/music-audio-alp-201709.jpg');

export default function TabOneScreen(props: any) {
  const { navigation } = props;
  const [items] = React.useState([
    {
      img: './assets/samsung-galaxy-s9-xxl.jpg',
      title: 'Samsung Galaxy S9',
      price: 15000,
      unit: 1,
    },
    {
      img: './assets/l6g6.jpg',
      title: 'LG G6',
      price: 10000,
      unit: 1,
    },
    {
      img: './assets/u_10168742.jpg',
      title: 'iPhone 8',
      price: 16000,
      unit: 1,
    },
    {
      img: './assets/motorola-moto-g5-plus-1.jpg',
      title: 'Motorola G5',
      price: 9000,
      unit: 1,
    },
    {
      img: './ assets / motorola - moto - g4 - 3.jpg',
      title: 'Moto G4',
      price: 8000,
      unit: 1,
    }
  ])
  return (
    <Container style={styles.container} >
      <Header transparent style={{ height: 250 }}>
        <ImageBackground source={{ uri: imageURL }} style={styles.headerImage} >
          <Text style={styles.title}>Tienda e-commerce</Text>
        </ImageBackground>
      </Header>
      <Content padder>
        <Text style={{ fontSize: 30, fontWeight: 'bold'}}>Smartphones</Text>
      </Content>

    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerImage: { width: Dimensions.get('window').width, height: 200, flex: 1, alignItems: 'center', justifyContent: 'center' },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

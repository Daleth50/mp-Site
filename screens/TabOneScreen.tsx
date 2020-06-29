import * as React from 'react';
import { StyleSheet, ImageBackground, Dimensions, Image, _FlatList, FlatList } from 'react-native';
import { Content, Container, Header, Text, View, Card, CardItem, Body, Button } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TabOneScreen(props: any) {
  const { navigation } = props;
  const [items] = React.useState([
    {
      id: '1',
      img: 'samsung-galaxy-s9-xxl.jpg',
      title: 'Samsung Galaxy S9',
      unit_price: 15000,
      quantity: 1,
      "description": "Multicolor Item",
      "currency_id": "MX",
    },
    {
      id: '2',
      img: 'l6g6.jpg',
      title: 'LG G6',
      unit_price: 10000,
      quantity: 1,
      "description": "Multicolor Item",
      "currency_id": "MX",
    },
    {
      id: '3',
      img: 'u_10168742.jpg',
      title: 'iPhone 8',
      unit_price: 16000,
      quantity: 1,
      "description": "Multicolor Item",
      "currency_id": "MX",
    },
    {
      id: '4',
      img: 'motorola-moto-g5-plus-1.jpg',
      title: 'Motorola G5',
      unit_price: 9000,
      quantity: 1,
      "description": "Multicolor Item",
      "currency_id": "MX",
    },
    {
      id: '5',
      img: 'motorola-moto-g4-3.jpg',
      title: 'Moto G4',
      unit_price: 8000,
      quantity: 1,
      "description": "Multicolor Item",
      "currency_id": "MX",
    },
    {
      img: '003.jpg',
      title: 'Sony Xperia XZ2',
      unit_price: 10000,
      quantity: 1,
      "description": "Multicolor Item",
      "currency_id": "MX",
    }
  ]);

  const goToDetail = (item: any) => {
    navigation.navigate('ItemDetailScreen', { item });
  }

  const renderItem = (item: any) => {
    return (
      <Card style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{
          width: (Dimensions.get('window').width / 3) - 20,
          height: Dimensions.get('window').height / 2, flex: 1,
          resizeMode: 'contain',
          marginTop: 15
        }}
          source={{ uri: require(`../assets/devices/${item.img}`) }} />
        <CardItem >
          <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>{item.title}</Text>
            <Text style={{ fontSize: 20 }}>${item.unit_price}</Text>
            <Button info onPress={() => goToDetail(item)}>
              <Text>Comprar</Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
    )
  }


  return (
    // <Container style={styles.container} >
    //   <SafeAreaView style={{ flex: 1 , padding: 15}}>
    //     <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Smartphones</Text>
    <FlatList
      data={items}
      ListHeaderComponent={<Text style={{ fontSize: 30, fontWeight: 'bold' }}>Smartphones</Text>}
      renderItem={(item) => renderItem(item.item)}
      keyExtractor={(item) => item.id}
      numColumns={3}
    // showsVerticalScrollIndicator={false}
    // showsHorizontalScrollIndicator={false}
    />
    //   </SafeAreaView>

    // </Container>
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
  headerImage: { width: Dimensions.get('window').width, height: 200, flex: 1, alignItems: 'center', justifyContent: 'center' },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

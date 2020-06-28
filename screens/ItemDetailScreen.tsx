import * as React from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, Text, View } from 'native-base';

export default function ItemDetailScreen({ navigation, route }) {
  const { item } = route.params;

  React.useEffect(() => {
    if (!route.params?.item) {
      navigation.replace('Home');
    }
  }, [route.params?.item]);

  const goToDetail = () => {
    navigation.navigate('ItemDetailScreen');
  }

  try {
    return (
      <Container>
        <Content>
          <Card style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{
              width: Dimensions.get('window').width / 3,
              height: Dimensions.get('window').height / 2, flex: 1,
              resizeMode: 'contain'
            }}
              source={{ uri: require(`../assets/devices/${item.img}`) }} />
            <CardItem >
              <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20 }}>{item.title}</Text>
                <Text style={{ fontSize: 20 }}>${item.price}</Text>
                <Text style={{ fontSize: 20 }}>Stock disponible: {item.unit}</Text>
                <Button info onPress={() => goToDetail()}>
                  <Text>Pagar</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  } catch (error) {
    console.log(error);
    
    navigation.replace('Home');
    return null;
    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

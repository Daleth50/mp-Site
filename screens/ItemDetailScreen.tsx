import * as React from 'react';
import { StyleSheet, Dimensions, Image, ActivityIndicator } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, Text, View } from 'native-base';
import { WebView } from 'react-native-webview';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import Axios from 'axios';

//check https://docs.expo.io/versions/v38.0.0/sdk/webbrowser/#webbrowseropenbrowserasyncurl

export default function ItemDetailScreen({ navigation, route }) {
  const { item } = route.params;

  const [haveURL, setURL] = React.useState(false);
  const [canGoBack, setCanGoBack] = React.useState(false)
  const [canGoForward, setCanGoForward] = React.useState(false)
  const [currentUrl, setCurrentUrl] = React.useState('');
  const webviewRef = React.useRef(null);

  const back_urls = {
    'success': 'http://apipaid.mercadomovil.com.mx/mp/success',
    'pending': 'http://apipaid.mercadomovil.com.mx/mp/pending',
    'failure': 'http://apipaid.mercadomovil.com.mx/mp/failure',
  }

  React.useEffect(() => {
    if (!route.params?.item) {
      navigation.replace('Home');
    }
  }, [route.params?.item]);

  const _handleRedirect = (event: any) => {
    if (Constants.platform?.ios) {
      WebBrowser.dismissBrowser();
    } else {
      _removeLinkingListener();
    }

    let data = Linking.parse(event.url);

    console.log(event);

  };


  const _addLinkingListener = () => {
    Linking.addEventListener('url', _handleRedirect);
  };

  const _removeLinkingListener = () => {
    Linking.removeEventListener('url', _handleRedirect);
  };

  const makePayment = async () => {
    const body =
    {
      "customer": {
        "name": "Lalo",
        "surname": "Landa",
        "email": "test_user_58295862@testuser.com",
        "phone": {
          "area_code": 52,
          "number": "5549737300"
        },
        "address": {
          "zip_code": "03940",
          "street_name": "Insurgentes sur",
          "street_number": "1602"
        }
      },
      "items": [item]
    };

    // setURL(true);

    await Axios.post('https://taki-41b6b.uc.r.appspot.com/api/v1/mp/checkout', body, {
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    })
      .then((response) => {
        console.log(response);

      })
      .catch((error) => {
        console.log(error);

      })

    // try {
    //   _addLinkingListener();
    //   Linking.openURL(`https://sandbox.mercadopago.com.mx/checkout/v1/redirect?pref_id=592190948-329de9ef-3b7e-4aa0-bdec-83a412abc0c9`);
    //   // let result = await WebBrowser.openBrowserAsync(
    //   //   // We add `?` at the end of the URL since the test backend that is used
    //   //   // just appends `authToken=<token>` to the URL provided.
    //   //   `https://sandbox.mercadopago.com.mx/checkout/v1/redirect?pref_id=592190948-329de9ef-3b7e-4aa0-bdec-83a412abc0c9`,
    //   //   back_urls
    //   //   // `https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=592190948-bb37d9ba-a08a-4c56-94d2-631243e016fd`
    //   // );

    //   // // https://github.com/expo/expo/issues/5555
    //   // if (Constants.platform.ios) {
    //   //   _removeLinkingListener();
    //   // }

    //   // console.log(result);

    // } catch (error) {
    //   alert(error);
    //   console.log(error);
    // }

    // try {
    //   let redirectUrl = Linking.makeUrl('path/into/app', { hello: 'world', goodbye: 'now' });
    //   let result = await WebBrowser.openAuthSessionAsync(
    //     // We add `?` at the end of the URL since the test backend that is used
    //     // just appends `authToken=<token>` to the URL provided.
    //     `https://sandbox.mercadopago.com.mx/checkout/v1/redirect?pref_id=592190948-329de9ef-3b7e-4aa0-bdec-83a412abc0c9`,
    //     redirectUrl
    //   );
    //   let redirectData;
    //   if (result.url) {
    //     redirectData = Linking.parse(result.url);
    //   }
    //   console.log(result);
    //   console.log(redirectData);

    // } catch (error) {
    //   alert(error);
    //   console.log(error);
    // }


  }

  // if (haveURL) {
  //   return (
  //     <WebView
  //       source={{ uri: 'https://heartbeat.fritz.ai/' }}
  //       startInLoadingState={true}
  //       renderLoading={() => (
  //         <ActivityIndicator
  //           color='black'
  //           size='large'
  //           style={styles.container}
  //         />
  //       )}
  //       ref={webviewRef}
  //       onNavigationStateChange={navState => {
  //         setCanGoBack(navState.canGoBack)
  //         setCanGoForward(navState.canGoForward)
  //         setCurrentUrl(navState.url)
  //       }}
  //     />
  //   )
  // }

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
                <Button info onPress={() => makePayment()}>
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

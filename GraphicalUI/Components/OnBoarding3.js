import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity, StatusBar} from 'react-native';
import logo from '../assets/cvdsafe.png';

// importing fonts 
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default function OnBoardingThree({ navigation }) {
  const pressHandler3 = () => {
    navigation.navigate('MainScreen')
  }

  // fonts load
  let [fontsLoaded] = useFonts({
    'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Bold': require('../assets/fonts/Montserrat-SemiBold.ttf')
  });

  // check if fonts are loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (

      <View style={styles.container}>
        <StatusBar backgroundColor='#ffb6c1' barStyle="light-content" />
        <Image source={logo} style={{ width: 500, marginBottom: 10 }} />
        <Text style={styles.headings}>Be Optimistic</Text>
        <Text style={styles.textBox}>Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.</Text>

        <View style={styles.dots}>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
          <View style={styles.circleFirst}></View>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={pressHandler3}>
            <Text style={{ fontSize: 18, fontFamily: 'Bold', color: '#58ACA8' }}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
            <Text style={{ fontSize: 18, fontFamily: 'Bold', color: '#58ACA8' }}>Previous</Text>
          </TouchableOpacity>
        </View>

      </View>


    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb6c1',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 37,
    paddingRight: 38,
  },

  textBox: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Regular'
  },

  headings: {
    fontSize: 23,
    paddingBottom: 6,
    fontFamily: 'Bold'
  },

  circle: {
    width: 9,
    height: 9,
    borderRadius: 100 / 2,
    backgroundColor: '#C4C4C4',
    margin: 3,
    marginTop: 45,
  },

  circleFirst: {
    width: 9,
    height: 9,
    borderRadius: 100 / 2,
    backgroundColor: '#58ACA8',
    margin: 3,
    marginTop: 45,
  },

  dots: {
    flexDirection: 'row',
  },

  btn: {
    marginTop: 20,

  }


});

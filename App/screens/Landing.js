import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import colors from '../config/colors.js';

function Landing({navigation}) {
  return (
    <SafeAreaView style={appStyle.window}>
      <Text style={appStyle.header}>Choice Free Cooking</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Choices')} style={appStyle.button}><Text style={appStyle.buttonText}>Starts Here</Text></TouchableOpacity>
      <Image style={appStyle.mainImg} source={require('../assets/undrawFigure.png')} />
    </SafeAreaView>
  );
}

const appStyle = StyleSheet.create({
  window: {
    height: '100%',
    width: '100%',
    padding: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  mainImg: {
    height: 170,
    resizeMode: 'contain',
    marginTop: '20%',
  },
  header: {
    fontSize: 60,
    top: '-10%',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 3
  },
  buttonText: {
    color: colors.background,
    fontSize: 30,
    padding: 7,
  }
});

export default Landing;

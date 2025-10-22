import { Linking ,StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { getFStadium } from '../db/Stadium/Football'

import Logo from '../assets/OIP.jpg'

export default function Stadium({ navigation }) {

  const URL = 'https://goo.gl/maps/6tXHQw6a5Yrg3A3K7'  
  const locationURL =(url) =>{
    Linking.openURL(url)
                        .then()
                        .catch((err) => console.error('An error occurred', err))
  }
  const stadium = getFStadium();
  return (
    <View>
      <Text>{stadium}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  image: {
    borderRadius: 5,
    maxWidth: '100%',
    height: 200,
  },
  item: {
    paddingBottom: 10
  },
  text: {
    fontSize: 18,
    paddingBottom: 10
  },
  Services: {
    maxWidth: '100%',
    height: 70,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  buttonstyle: {
    backgroundColor: '#3c8d0d',
    width: '60%',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttontext: {
    color: 'rgb(255, 255, 255)',
    fontWeight: '700',
    fontSize: 16,
  },
  shapestyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : 20
  },
  input: {
    fontSize: 30,
    color: 'rgb(255, 255, 255)',
  },
  pricebox: {
    backgroundColor: '#3c8d0d',
    width: '100%',
    height: 50,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
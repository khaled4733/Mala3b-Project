import {TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function AdminArea({navigation}) {

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.buttonstyle} onPress={() => { navigation.navigate('FootBallEdit') }}>
        <Text style={styles.buttontext}>Click for edit Football Stadiums</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonstyle} onPress={() => { navigation.navigate('BasketballEdit') }}>
        <Text style={styles.buttontext}>Click for edit Basketball Stadiums</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonstyle} onPress={() => { navigation.navigate('TennisEdit') }}>
        <Text style={styles.buttontext}>Click for edit Tennis Stadiums</Text>
      </TouchableOpacity>
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22223b",
    padding: 60,
    alignItems: "center",
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#22223b'
  },
  buttonstyle: {
    backgroundColor: '#f2e9e4',
    width: '100%',
    height: 80,
    marginBottom: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttontext: {
    color: '#22223b',
    fontWeight: '700',
    fontSize: 16,
  },
})
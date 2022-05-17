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
    backgroundColor: "#FFF",
    padding: 60,
    alignItems: "center",
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
    
  },
  buttonstyle: {
    backgroundColor: '#022b3a',
    width: '100%',
    height: 80,
    marginBottom: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttontext: {
    color: 'rgb(255, 255, 255)',
    fontWeight: '700',
    fontSize: 16,
  },
})
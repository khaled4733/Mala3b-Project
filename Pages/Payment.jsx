import { TouchableOpacity,StyleSheet, Text, View, Image, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

import Logo from '../assets/2511582.jpg'

export default function Payment() {
  const [name, setName] = useState("");
  const [cardnumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [date, setDate] = useState("");
  
  const Handler = () =>{
    if (name != '' && cardnumber.toString() != '' && cvv.toString() != '' && date.toString() != '') {
      alert("Done! Check your email for confirmation message")
    } else {
      alert("please fill the information of yout card")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Image source={Logo} style={styles.image} />
      </View>
      <View style={styles.format}>
        <TextInput
          style={styles.input}
          placeholder="Card Name"
          onChangeText={setName}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          onChangeText={setCardNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="MM/YY"
          onChangeText={setDate}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          onChangeText={setCVV}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.buttonstyle} onPress={Handler}>
          <Text style={styles.buttontext}>Pay</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
    textAlign: 'center',
    paddingHorizontal: 50

  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80,
    paddingTop: 100,
    paddingBottom: 50
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  input: {
    height:40,
    color:'rgb(255, 255, 255)',
    borderBottomColor: "#cae9ff" ,
    borderBottomWidth: 4,
  },
  buttonstyle: {
    backgroundColor: '#022b3a',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttontext: {
    color: 'rgb(255, 255, 255)',
    fontWeight: '700',
    fontSize: 16,
  },
  format: {
    paddingBottom: 20
  }
})
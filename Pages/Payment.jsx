import { TouchableOpacity,StyleSheet, Text, View, Image, Button, TextInput } from 'react-native'
import React, { useState,useEffect } from 'react'

import Logo from '../assets/2511582.jpg'
import {getFStadium} from "../db/Stadium/Football";
import {getUserUId} from "../db/Auth";
import {addUsersToDocuments, updateFAvailable} from "../db/User";
import {getBStadium} from "../db/Stadium/Basketball";
import {getTStadium} from "../db/Stadium/Tennis";

export default function Payment({navigation,route}) {
  const {user} = route.params;
  const currentUserId = user.uid;
  const [name, setName] = useState("");
  const [cardnumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [date, setDate] = useState("");
  const [Fstadium, setFStadium] = useState([]);
  const [Bstadium, setBStadium] = useState([]);
  const [Tstadium, setTStadium] = useState([]);


  // console.log(user)

// console.log(stadium);

  useEffect(() => {
     getFStadium().then((data) => {
       setFStadium(data);
    })
  },[]);


  useEffect(() => {
    getBStadium().then((data) => {
      setBStadium(data);
    })
  },[]);


  useEffect(() => {
    getTStadium().then((data) => {
      setTStadium(data);
    })
  },[]);

  //  ---------------------------
  //add users to football
  useEffect(() => {
    for (let i = 0; i < Fstadium.length; i++) {
      addUsersToDocuments("football", Fstadium[i].id,user)
    }
  },[]);

  //add users to basket
  useEffect(() => {
    for (let i = 0; i < Bstadium.length; i++) {
      addUsersToDocuments("basketball", Bstadium[i].id,user)
    }
  },[]);

  //add users to tennis
  useEffect(() => {
    for (let i = 0; i < Tstadium.length; i++) {
      addUsersToDocuments("tennis", Tstadium[i].id,user)
    }
  },[]);




  const Handler = () =>{
    if (name != '' && cardnumber.toString() != '' && cvv.toString() != '' && date.toString() != '') {
      for (let i = 0; i < Fstadium.length; i++) {
        if(Fstadium[i].id === currentUserId){
          updateFAvailable(currentUserId,Fstadium[i]).then(alert("Done! Check your email for confirmation message"))
          }
      }

      for (let i = 0; i < Tstadium.length; i++) {
        if(Tstadium[i].id === currentUserId){
          updateFAvailable(currentUserId,Tstadium[i]).then(alert("Done! Check your email for confirmation message"))
        }
      }

      for (let i = 0; i < Bstadium.length; i++) {
        if(Bstadium[i].id === currentUserId){
          updateFAvailable(currentUserId,Bstadium[i]).then(alert("Done! Check your email for confirmation message"))
        }
      }

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
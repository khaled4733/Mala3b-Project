import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";

import Logo from "../assets/2511582.jpg";
import { deleteFStadium, getFStadium } from "../db/Stadium/Football";
import { getUserUId } from "../db/Auth";
import {addUsersToDocuments, updateFootball, test, getUsers,updateUser} from "../db/User";
import { getBStadium } from "../db/Stadium/Basketball";
import { getTStadium } from "../db/Stadium/Tennis";

export default function Payment({ navigation, route }) {
  let currentUserId;
  const [Fstadium, setFStadium] = useState([]);
  const [Bstadium, setBStadium] = useState([]);
  const [Tstadium, setTStadium] = useState([]);
  // const [currentUserBalance,setCurrentUserBalance] = useState();
  let currentFStadPrice;
  let currentBStadPrice;
  let currentTStadPrice;
  let {id:id,stadName:stadName,day:day,stDate:stDate,edDate:edDate,} = route.params;

  // console.log(user)

  // console.log(stadium);

  // set currentUserId with userId
  useEffect(()=>{
    getUserUId().then((userId)=>{
      currentUserId = userId;
    })
  },[]);

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

  const Handler = () => {
    /*Handle Football*/
    console.log("here in paymethod")
    //get currentFStadPrice
    getFStadium().then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === stadName) {
          console.log("Fstad name in db is " + data[i].name)
          console.log("Fstad price in db is " + data[i].price)
          currentFStadPrice = data[i].price
          console.log("Fstad price locally is " + currentFStadPrice)
        }
      }
    })



    getBStadium().then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === stadName) {
          console.log("Bstad name in db is " + data[i].name)
          console.log("Bstad price in db is " + data[i].price)
          currentBStadPrice = data[i].price
          console.log("Bstad price locally is " + currentBStadPrice)
        }
      }
    })



    getTStadium().then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === stadName) {
          console.log("Tstad name in db is " + data[i].name)
          console.log("Tstad price in db is " + data[i].price)
          currentTStadPrice = data[i].price
          console.log("Tstad price locally is " + currentTStadPrice)
        }
      }
    })

    //update current user balance
    getUsers().then((users) => {
      getUserUId().then((userId) => {
        console.log("inside getUsers()")
        console.log(users)
        for (let i = 0; i < users.length; i++) {
          console.log("should be printed" + users.length + " times")
          if (userId == users[i].id) {
            console.log("userId == users[i].id is true")
            for (let j = 0; j < Fstadium.length; j++) {
              if (Fstadium[j].name !== undefined) {   //to remove error "Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'name')"
                if (stadName === Fstadium[j].name) {
                  if (currentFStadPrice > users[i].balance) {
                    console.log("Fstadium[j] before pop",Fstadium[j].state)
                    alert("you dont have enough money") // ASK doc -> not working
                    // Fstadium[j].state.pop();
                    // console.log("Fstadium[j] after pop",Fstadium[j].state)
                    // updateFootball(Fstadium[i]);
                    navigation.goBack();
                    break;
                  } else {
                    console.log("currentFStadPrice is : ",currentFStadPrice)
                    console.log("users[i].balance is : ",users[i].balance)
                    users[i].balance = users[i].balance - currentFStadPrice;
                    Fstadium[j].state.push({id,day,stDate,edDate})
                    updateFootball(Fstadium[j]) //update date in state
                    updateUser(users[i]).then(() => alert("user's balance has been updated")); //update balance
                    navigation.goBack();
                  }
                }


              } else if (stadName === Bstadium[i].name) {
                if (currentBStadPrice > users[i].balance) {
                  alert("you dont have enough money")
                  Bstadium[j].state.pop();
                  updateBasketball(Bstadium[j]);
                  navigation.goBack();
                  break;
                } else {
                  console.log(currentBStadPrice)
                  users[i].balance = users[i].balance - currentBStadPrice;
                  updateUser(users[i]).then(() => alert("user's balance has been updated"));
                  navigation.goBack();
                }
              } else if (stadName === Tstadium[j].name) {
                if (currentTStadPrice > users[i].balance) {
                  alert("you dont have enough money")
                  Tstadium[j].state.pop();
                  updateTennis(Tstadium[j]);
                  navigation.goBack();
                  break;
                } else {
                  console.log(currentTStadPrice)
                  users[i].balance = users[i].balance - currentTStadPrice;
                  updateUser(users[i]).then(() => alert("user's balance has been updated"));
                  navigation.goBack();
                }
              }
            }
          }
        }
      })
    })
  }
  return (

    <View style={styles.container}>
      <View style={styles.screen}>
        <Image source={Logo} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.buttonstyle} onPress={Handler}>
        <Text style={styles.buttontext}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5390d9",
    textAlign: "center",
    paddingHorizontal: 50,
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 80,
    paddingTop: 100,
    paddingBottom: 50,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  input: {
    height: 40,
    color: "rgb(255, 255, 255)",
    borderBottomColor: "#cae9ff",
    borderBottomWidth: 4,
  },
  buttonstyle: {
    backgroundColor: "#f2e9e4",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttontext: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
  },
  format: {
    paddingBottom: 20,
  },
});

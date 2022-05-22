import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

import Logo from "../assets/2511582.jpg";
import { deleteFStadium, getFStadium } from "../db/Stadium/Football";
import { getUserUId } from "../db/Auth";
import {
  addUsersToDocuments,
  updateFootball,
  test,
  getUsers,
  updateUser,
  updateBasketball,
  updateTennis,
} from "../db/User";
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
  let {
    id: id,
    stadName: stadName,
    day: day,
    stDate: stDate,
    edDate: edDate,
  } = route.params;

  // console.log(user)

  // console.log(stadium);

  // set currentUserId with userId
  useEffect(() => {
    getUserUId().then((userId) => {
      currentUserId = userId;
    });
  }, []);

  useEffect(() => {
    getFStadium().then((data) => {
      setFStadium(data);
    });
  }, []);

  useEffect(() => {
    getBStadium().then((data) => {
      setBStadium(data);
    });
  }, []);

  useEffect(() => {
    getTStadium().then((data) => {
      setTStadium(data);
    });
  }, []);

  const Handler = () => {

    //get currentFStadPrice
    getFStadium().then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === stadName) {
          console.log("Fstad name in db is " + data[i].name);
          console.log("Fstad price in db is " + data[i].price);
          currentFStadPrice = data[i].price;
          console.log("Fstad price locally is " + currentFStadPrice);
        }
      }
    });

    getBStadium().then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === stadName) {
          console.log("Bstad name in db is " + data[i].name);
          console.log("Bstad price in db is " + data[i].price);
          currentBStadPrice = data[i].price;
          console.log("Bstad price locally is " + currentBStadPrice);
        }
      }
    });

    getTStadium().then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === stadName) {
          console.log("Tstad name in db is " + data[i].name)
          console.log("Tstad name in locally is " + stadName)
          currentTStadPrice = data[i].price
          console.log("Tstad price in db is " + data[i].price)
          console.log("Tstad price locally is " + currentTStadPrice)
        }
      }
    })



    //update current user balance
    getUsers().then((users) => {
      getUserUId().then((userId) => {
        console.log("inside getUsers()");
        console.log(users);
        for (let i = 0; i < users.length; i++) {
          console.log("should be printed" + users.length + " times");
          if (userId == users[i].id) {
            console.log("userId == users[i].id is true");
            for (let j = 0; j < Fstadium.length; j++) {
              if (Fstadium[j].name !== undefined) {
                //to remove error "Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'name')"
                if (stadName === Fstadium[j].name) {
                  if (currentFStadPrice > users[i].balance) {
                    alert("you dont have enough money") // ASK doc -> not working
                    // Fstadium[j].state.pop();
                    // console.log("Fstadium[j] after pop",Fstadium[j].state)
                    // updateFootball(Fstadium[i]);
                    navigation.goBack();
                    break;
                  } else {

                    console.log("currentFStadPrice is : ", currentFStadPrice)
                    console.log("users[i].balance is : ", users[i].balance)
                    users[i].balance = users[i].balance - currentFStadPrice;
                    Fstadium[j].state.push({id, day, stDate, edDate})
                    updateFootball(Fstadium[j]) //update date in state
                    updateUser(users[i]).then(() => alert("user's balance has been updated")); //update balance
                    navigation.navigate('Home');
                  }
                }
              }
            }

            for (let j = 0; j < Bstadium.length; j++) {
              if (stadName === Bstadium[j].name) {
                if (Bstadium[j].name !== undefined) {   //to remove error "Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'name')"
                  if (currentBStadPrice > users[i].balance) {
                    alert("you dont have enough money")
                    navigation.goBack();
                    break;
                  } else {
                    console.log(currentBStadPrice)
                    users[i].balance = users[i].balance - currentBStadPrice;
                    Bstadium[j].state.push({id, day, stDate, edDate})
                    updateBasketball(Bstadium[j]) //update date in state
                    updateUser(users[i]).then(() => alert("user's balance has been updated"));
                    navigation.navigate('Home');

                  }
                }
              }
            }

            for (let j = 0; j < Tstadium.length; j++) {
              if (stadName === Tstadium[j].name) {
                console.log("tennis (stadName) is : ", stadName)
                console.log("tennis (Tstadium[j].name) is : ", Tstadium[j].name)
                if (Tstadium[j].name !== undefined) {   //to remove error "Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'name')"
                  if (currentTStadPrice > users[i].balance) {
                    alert("you dont have enough money")
                    navigation.goBack();
                    break;
                  } else {
                    console.log(currentTStadPrice)
                    users[i].balance = users[i].balance - currentTStadPrice;
                    Tstadium[j].state.push({id, day, stDate, edDate})
                    updateTennis(Tstadium[j])
                    updateUser(users[i]).then(() => alert("user's balance has been updated"));
                    navigation.navigate('Home');

                  }
                }
              }
            }
          }
        }
      });
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <Image source={Logo} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={Handler}>
          <Text style={styles.buttontext}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const cardwidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f2e9e4",
  },
  component: {
    backgroundColor: "#22223b",
    borderRadius: 20,
    width: cardwidth - 100,
    height: 500,
    paddingHorizontal: 25,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
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
    marginBottom: 20,
  },
  buttontext: {
    color: "#22223b",
    fontSize: 15,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#f2e9e4",
    marginTop: 20,
    width: 120,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

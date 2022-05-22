import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { signout } from "../db/Auth";
import React, { useState, useEffect } from "react";
import { getUserById, getUsers } from "../db/User";
import { getUserUId } from "../db/Auth";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import avatar from "../assets/Untitled-1111.png";

export default function Profile({ navigation, route }) {
  const [users, setUsers] = useState([]);
  // const [user, setUser] = useState([]);
  const [idu, setIdu] = useState("");

  useEffect(() => {
    getUserUId().then((e) => {
      setIdu(e);
    });
  }, []);

  // getUserById(idu).then((data) =>{
  //     console.log(data)
  // })

  // useEffect(() => {
  //     getUserById(idu).then((data) =>{
  //         console.log(data)
  //         setUser(data)
  //     })
  // }, []);

  var user = {
    fullname: "",
    email: "",
    balance: "",
    phone: "",
    gender: "",
    role: "",
    piclink: "",
    id: "",
  };

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  users.map((item, index) => {
    if (item.id == idu) {
      user = item;
    }
  });

  const handleSignOut = () => {
    Alert.alert("Logout!", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => {},
      },

      {
        text: "Ok",
        onPress: () => {
          signout()
            .then()
            .catch((error) => alert(error.message));
          console.log("signout successful");
        },
      },
    ]);
  };

  const handleadminarea = () => {
    if (user.role == 1) {
      navigation.navigate("AdminArea");
    } else {
      alert("you dont have permmision to enter the area");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxalign}>
        <View style={styles.box1}>
          <View style={styles.imagecover}>
            <Image source={{ uri: user.piclink }} style={styles.imagecover} />
          </View>
          <Text style={{ color: "#22223b", fontSize: 30 }}>
            {" "}
            {user.fullname}{" "}
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <Icon name="email" color={"#f2e9e4"} size={30} />
        <View style={styles.box}>
          <Text style={{ color: "#22223b", marginLeft: 10, fontSize: 15 }}>
            {" "}
            {user.email}{" "}
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <Icon name="cash-multiple" color={"#f2e9e4"} size={30} />
        <View style={styles.box}>
          <Text style={{ color: "#22223b", marginLeft: 10, fontSize: 15 }}>
            {" "}
            {user.balance} L.E{" "}
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <Icon name="cellphone" color={"#f2e9e4"} size={30} />
        <View style={styles.box}>
          <Text style={{ color: "#22223b", marginLeft: 10, fontSize: 15 }}>
            {" "}
            {user.phone}{" "}
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <Icon name="gender-male-female" color={"#f2e9e4"} size={30} />
        <View style={styles.box}>
          <Text style={{ color: "#22223b", marginLeft: 10, fontSize: 15 }}>
            {" "}
            {user.gender}{" "}
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <Icon name="email" color={"#f2e9e4"} size={30} />
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.buttonstyle}
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            <Text style={styles.buttontext}>Edit myProfile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <Icon name="lock" color={"#f2e9e4"} size={30} />
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.buttonstyle}
            onPress={handleadminarea}
          >
            <Text style={styles.buttontext}>Admin</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <Icon name="logout" color={"#f2e9e4"} size={30} />
        <View style={styles.box}>
          <TouchableOpacity style={styles.buttonstyle} onPress={handleSignOut}>
            <Text style={styles.buttontext}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const cardwidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22223b",
  },
  boxalign: {
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
    color: "#f2e9e4",
  },
  imagecover: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#22223b",
  },
  box1: {
    backgroundColor: "#f2e9e4",
    borderRadius: 20,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    width: cardwidth - 65,
    height: 200,
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  row: {
    flexDirection: "row",
    marginLeft: 20,
    marginBottom: 30,
  },
  buttonstyle: {
    backgroundColor: "#f2e9e4",
    width: "100%",
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  buttontext: {
    color: "#22223b",
    fontWeight: "700",
    fontSize: 16,
  },
  box: {
    marginLeft: 10,
    width: "75%",
    height: 40,
    backgroundColor: "#f2e9e4",
    borderRadius: 15,
    justifyContent: "center",
  },
});

{
  /* <TouchableOpacity style={styles.buttonstyle} onPress={handleSignOut}>
                <Text style={styles.buttontext}>LogOut</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonstyle} onPress={handleadminarea}>
                <Text style={styles.buttontext}>admin</Text>
            </TouchableOpacity> */
}

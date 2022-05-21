import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Switch,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function CardComponent({ e, navigation }, key) {
  return (
    <View key={key} style={styles.Container}>
      <View style={styles.CardContainer}>
        <ImageBackground
          source={{ uri: e.pic }}
          style={styles.image}
        ></ImageBackground>

        <View style={styles.style1}>
          <Text style={styles.title}> {e.name} </Text>
        </View>

        <View style={styles.style2}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Stadium", { e: e });
            }}
          >
            <Text style={styles.buttontext}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const cardwidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
  },
  CardContainer: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: cardwidth - 40,
    height: 240,
    backgroundColor: "#f2e9e4",
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: cardwidth - 40,
    height: 130,
    opacity: 0.9,
    marginBottom: 5,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  favouritebutton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 30,
    paddingTop: 18,
  },
  title: {
    justifyContent: "flex-start",
    fontSize: 30,
    fontWeight: "bold",
    color: "#22223b",
  },
  buttontext: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "500",
  },
  style1: {
    marginLeft: 5,
  },
  style2: {
    alignItems: "flex-end",
  },
  button: {
    backgroundColor: "#22223b",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: "40%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Logo from "../assets/2511582.jpg";

const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.imagecover} />
      <Text style={styles.title}>Welcome to Mal3ab!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <Text style={styles.buttontext}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={styles.buttontext}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#22223b",
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#f2e9e4",
    marginVertical: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    color: "#22223b",
    fontWeight: "700",
    fontSize: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 30,
  },
  imagecover: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#22223b",
  },
});

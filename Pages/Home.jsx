import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
} from "react-native";
import React from "react";
import { useEffect } from "react";

import footballBackground from "../assets/Untitled-3.png";
import basketballBackground from "../assets/Untitled-2.png";
import tennisBackground from "../assets/Untitled-1.png";

export default function Home({ navigation, route }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}> Welcome in Mal3ab! </Text>
        <View style={styles.cardsContainer}>
          <View style={styles.CategoryCard}>
            <Image source={footballBackground} style={styles.ImageStyle} />
            <View>
              <Text style={styles.text1}> Football </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate("Football");
                }}
              >
                <Text style={styles.buttontext}>GO!</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.CategoryCard}>
            <Image source={tennisBackground} style={styles.ImageStyle} />
            <View>
              <Text style={styles.text2}> Tennis </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate("Tennis");
                }}
              >
                <Text style={styles.buttontext}>GO!</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.CategoryCard}>
            <Image source={basketballBackground} style={styles.ImageStyle} />
            <View>
              <Text style={styles.text3}> Basketball </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate("Basketball");
                }}
              >
                <Text style={styles.buttontext}>GO!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const cardwidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#22223b",
    paddingBottom: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 20,
    color: "#FFF",
  },
  CategoryCard: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f2e9e4",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 30,
    width: cardwidth - 40,
    height: 150,

    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  ImageStyle: {
    width: cardwidth - 150,
    height: 173,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  text1: {
    marginLeft: 18,
    fontSize: 20,
    fontWeight: "600",
    color: "#22223b",
  },
  text2: {
    marginLeft: 23,
    fontSize: 20,
    fontWeight: "600",
    color: "#22223b",
  },
  text3: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "600",
    color: "#22223b",
  },
  buttontext: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#22223b",
    marginLeft: 15,
    marginTop: 20,
    width: 80,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

{
  /* <TouchableOpacity onPress={() => { navigation.navigate('Football') }}>
</TouchableOpacity>
<TouchableOpacity onPress={() => { navigation.navigate('Tennis') }}>
</TouchableOpacity>
<TouchableOpacity onPress={() => { navigation.navigate('Basketball') }}>
</TouchableOpacity> */
}

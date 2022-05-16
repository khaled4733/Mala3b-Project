import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import { addFStadium, deleteFStadium } from "../db/Stadium/Football";
const FootballEdit = ({ navigation }) => {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [pic, setpic] = useState("");
  const [link, setlink] = useState("");
  const [date, setdate] = useState("");
  const [price, setprice] = useState("");
  // const [error, setError] = useState("");

  function addfootball() {
    var football = {
      name: name,
      pic: pic,
      price: price,
      link: link,
      date: date,
      id: id,
    };

    addFStadium(football).then(alert("done!"));
    console.log("football", football);
  }

    function deletefootball() {
      deleteFStadium(id).then(alert("done!"));
    }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>add Stadium</Text>
        <View>
          <TextInput
            style={styles.textinput}
            placeholder="id"
            value={id}
            onChangeText={(text) => setid(text)}
            keyboardType="default"
          />

          <TextInput
            style={styles.textinput}
            placeholder="name"
            value={name}
            onChangeText={(text) => setname(text)}
            keyboardType="default"
          />

          <TextInput
            style={styles.textinput}
            placeholder="picture link"
            value={pic}
            onChangeText={(text) => setpic(text)}
            keyboardType="default"
          />

          <TextInput
            style={styles.textinput}
            placeholder="location link"
            value={link}
            onChangeText={(text) => setlink(text)}
            keyboardType="default"
          />

          <TextInput
            style={styles.textinput}
            placeholder="date"
            value={date}
            onChangeText={(text) => setdate(text)}
            keyboardType="default"
          />

          <TextInput
            style={styles.textinput}
            placeholder="price"
            value={price}
            onChangeText={(text) => setprice(text)}
            keyboardType="default"
          />

        </View>
        <View style={styles.format}>
          <TouchableOpacity
            style={styles.buttonstyle}
            onPress={() => addfootball()}
          >
            <Text style={styles.buttontext}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>

        <Text style={styles.title}>delete Stadium</Text>
        <View>
          <TextInput
            style={styles.textinput}
            placeholder="enter id"
            value={id}
            onChangeText={(text) => setid(text)}
            keyboardType="default"
          />
        </View>

        <View style={styles.format}>
          <TouchableOpacity
            style={styles.buttonstyle}
            onPress={() => deletefootball()}
          >

            <Text style={styles.buttontext}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default FootballEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  buttonstyle: {
    backgroundColor: "#022b3a",
    width: "50%",
    height: 40,
    marginBottom: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext: {
    color: "rgb(255, 255, 255)",
    fontWeight: "700",
    fontSize: 16,
  },
  textinput: {
    height: 40,
    color: "#000000",
    borderBottomColor: "#cae9ff",
    borderBottomWidth: 4,
  },
  format: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: "100%",
    backgroundColor: "#000000",
    height: 1,
  },
});

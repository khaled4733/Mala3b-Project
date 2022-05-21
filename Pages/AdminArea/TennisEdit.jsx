import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  ScrollView,
  Image,
} from "react-native";

import React, { useState, useEffect, useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import * as ImagePicker from "expo-image-picker";
import {
  addTStadium,
  deleteTStadium,
  updateTStadium,
} from "../../db/Stadium/Tennis";

export default function TennisEdit({ navigation }) {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [pic, setpic] = useState("");
  const [link, setlink] = useState("");
  const [price, setprice] = useState("");
  const [state, setState] = useState([]);
  const [available, setavailable] = useState("");

  const [idu, setidu] = useState("");

  const [id1, setid1] = useState("");
  const [name1, setname1] = useState("");
  const [pic1, setpic1] = useState("");
  const [link1, setlink1] = useState("");
  const [price1, setprice1] = useState("");

  function addtennis() {
    var tennis = {
      name: name,
      pic: pic,
      price: price,
      link: link,
      id: id,
      state: state,
    };

    addTStadium(tennis, id).then(alert("done!"));
    console.log("football", tennis);
    setid("");
    setname("");
    setpic("");
    setlink("");
    setprice("");
  }

  function deleteStadium() {
    deleteTStadium(idu).then(alert("done!"));
    setidu("");
  }

  function updateStadium() {
    var football = {
      name: name1,
      pic: pic1,
      price: price1,
      link: link1,
    };

    updateTStadium(id1, football).then(alert("done!"));
    setid1("");
    setname1("");
    setpic1("");
    setlink1("");
    setprice1("");
  }

  useEffect(async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("permision denied");
      }
    }
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("result", result);
    if (!result.cancelled) {
      setpic(result.uri);
    }
  };

  const PickImage1 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("result", result);
    if (!result.cancelled) {
      setpic1(result.uri);
    }
  };

  const takePicture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    console.log("result", result);
    if (!result.cancelled) {
      setpic1(result.uri);
    }
  };

  const takePicture1 = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    console.log("result", result);
    if (!result.cancelled) {
      setpic1(result.uri);
    }
  };

  const refRBSheet = useRef();
  const refRBSheet1 = useRef();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.addView}>
          <Text style={styles.title}>add Stadium</Text>

          <View style={styles.format}>
            <TouchableOpacity
              style={styles.avatar}
              onPress={() => refRBSheet.current.open()}
            >
              <Image source={{ uri: pic }} style={styles.userimage} />
            </TouchableOpacity>
          </View>

          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent",
              },
              draggableIcon: {
                backgroundColor: "#000",
              },
            }}
          >
            <View style={styles.view}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  paddingBottom: 10,
                  color: "#22223b",
                  marginBottom: 40,
                }}
              >
                Upload Photo
              </Text>
              <TouchableOpacity
                style={styles.buttonstyle1}
                onPress={takePicture}
              >
                <Text style={styles.buttontext}> Take Photo </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonstyle1} onPress={PickImage}>
                <Text style={styles.buttontext}>
                  {" "}
                  Choose Photo from gallery{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </RBSheet>

          <RBSheet
            ref={refRBSheet1}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent",
              },
              draggableIcon: {
                backgroundColor: "#000",
              },
            }}
          >
            <View style={styles.view}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  paddingBottom: 10,
                  color: "#22223b",
                  marginBottom: 40,
                }}
              >
                Upload Photo
              </Text>
              <TouchableOpacity
                style={styles.buttonstyle1}
                onPress={takePicture1}
              >
                <Text style={styles.buttontext}> Take Photo </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonstyle1}
                onPress={PickImage1}
              >
                <Text style={styles.buttontext}>
                  {" "}
                  Choose Photo from gallery{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </RBSheet>

          <View>
            <TextInput
              style={styles.textinput}
              placeholder="id"
              value={id}
              onChangeText={(text) => setid(text)}
              keyboardType="default"
              placeholderTextColor={"#f2e9e4"}
            />

            <TextInput
              style={styles.textinput}
              placeholder="name"
              value={name}
              onChangeText={(text) => setname(text)}
              keyboardType="default"
              placeholderTextColor={"#f2e9e4"}
            />

            <TextInput
              style={styles.textinput}
              placeholder="location link"
              value={link}
              onChangeText={(text) => setlink(text)}
              keyboardType="default"
              placeholderTextColor={"#f2e9e4"}
            />

            <TextInput
              style={styles.textinput}
              placeholder="price"
              value={price}
              onChangeText={(text) => setprice(text)}
              keyboardType="default"
              placeholderTextColor={"#f2e9e4"}
            />
          </View>
          <View style={styles.format}>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={() => addtennis()}
            >
              <Text style={styles.buttontext}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.line}></View>

        <View style={styles.addView}>
          <Text style={styles.title}>delete Stadium</Text>
          <View>
            <TextInput
              style={styles.textinput}
              placeholder="enter id"
              value={idu}
              onChangeText={(text) => setidu(text)}
              keyboardType="default"
              placeholderTextColor={"#f2e9e4"}
            />
          </View>
          <View style={styles.format}>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={deleteStadium}
            >
              <Text style={styles.buttontext}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.line}></View>

        <View style={styles.addView}>
          <Text style={styles.title}>update Stadium</Text>

          <View style={styles.format}>
            <TouchableOpacity
              style={styles.avatar}
              onPress={() => refRBSheet1.current.open()}
            >
              <Image source={{ uri: pic1 }} style={styles.userimage} />
            </TouchableOpacity>
          </View>

          <View>
            <TextInput
              style={styles.textinput}
              placeholder="id"
              value={id1}
              onChangeText={(text) => setid1(text)}
              keyboardType="default"
              placeholderTextColor={"#f2e9e4"}
            />

            <TextInput
              style={styles.textinput}
              placeholder="name"
              value={name1}
              onChangeText={(text) => setname1(text)}
              keyboardType="default"
              placeholderTextColor={"#f2e9e4"}
            />

            <TextInput
              style={styles.textinput}
              placeholder="location link"
              value={link1}
              onChangeText={(text) => setlink1(text)}
              keyboardType="default"
              placeholderTextColor={"#f2e9e4"}
            />

            <TextInput
              style={styles.textinput}
              placeholder="price"
              value={price1}
              onChangeText={(text) => setprice1(text)}
              keyboardType="default"
              placeholderTextColor={"#f2e9e4"}
            />
          </View>
          <View style={styles.format}>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={updateStadium}
            >
              <Text style={styles.buttontext}>Update</Text>
            </TouchableOpacity>
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
    backgroundColor: "#f2e9e4",
    alignItems: "center",
  },
  addView: {
    backgroundColor: "#22223b",
    borderRadius: 20,
    width: cardwidth - 100,
    height: 500,
    paddingHorizontal: 25,
    marginVertical: 15,
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 10,
    color: "#f2e9e4",
  },
  buttonstyle: {
    backgroundColor: "#f2e9e4",
    width: "50%",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext: {
    color: "#22223b",
    fontWeight: "700",
    fontSize: 16,
  },
  textinput: {
    height: 40,
    color: "#f2e9e4",
    borderBottomColor: "#f2e9e4",
    borderBottomWidth: 4,
  },
  format: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: "100%",
    backgroundColor: "#022b3a",
    height: 1,
  },
  userimage: {
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: "center",
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonstyle1: {
    backgroundColor: "#f2e9e4",
    width: "80%",
    height: 40,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: "#f2e9e4",
    justifyContent: "center",
  },
});

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { editUser } from "../db/User";
import RBSheet from "react-native-raw-bottom-sheet";
import { getUserUId } from "../db/Auth";
import * as ImagePicker from "expo-image-picker";
import avatar from "../assets/Untitled-1111.png";

export default function EditUserProfile({ navigation }) {
  const [fullname, setfullname] = useState("");
  const [phone, setphone] = useState("");
  const [idu, setIdu] = useState("");
  const [piclink, setpiclink] = useState(avatar);

  var user = {
    fullname: "",
    phone: "",
    piclink: "",
  };

  getUserUId().then((e) => {
    setIdu(e);
  });

  const updateuserinfo = () => {
    Alert.alert("Update Profile", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => {},
      },

      {
        text: "Ok",
        onPress: () => {
          editUser(idu, fullname, phone, piclink).then(
            navigation.navigate("Profile")
          );
        },
      },
    ]);
  };

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
      setpiclink(result.uri);
    }
  };

  const takePicture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    console.log("result", result);
    if (!result.cancelled) {
      setpiclink(result.uri);
    }
  };

  const refRBSheet = useRef();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.addView}>
        <Text style={styles.title}>update user info</Text>

        <View style={styles.format}>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.open();
            }}
          >
            <Image source={{ uri: piclink }} style={styles.userimage} />
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
            <TouchableOpacity style={styles.buttonstyle1} onPress={takePicture}>
              <Text style={styles.buttontext}> Take Photo </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonstyle1} onPress={PickImage}>
              <Text style={styles.buttontext}> Choose Photo from gallery </Text>
            </TouchableOpacity>
          </View>
        </RBSheet>

        <View>
          <TextInput
            style={styles.textinput}
            placeholder="name"
            value={fullname}
            onChangeText={(text) => setfullname(text)}
            keyboardType="default"
            placeholderTextColor={"#FFF"}
          />

          <TextInput
            style={styles.textinput}
            placeholder="phone"
            value={phone}
            onChangeText={(text) => setphone(text)}
            keyboardType="default"
            placeholderTextColor={"#FFF"}
          />
        </View>
        <View style={styles.format}>
          <TouchableOpacity style={styles.buttonstyle} onPress={updateuserinfo}>
            <Text style={styles.buttontext}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const cardwidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2e9e4",
    alignItems: "center",
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
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
  buttonstyle1: {
    backgroundColor: "#f2e9e4",
    width: "80%",
    height: 40,
    borderRadius: 10,
    marginBottom: 20,
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
});

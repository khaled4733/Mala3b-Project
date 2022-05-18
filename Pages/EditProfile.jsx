import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import userimage from "../assets/2511582.jpg";

export default function EditProfile() {
  return (
    <View style={styles.container}>
      <Image source={userimage} style={styles.userimage} />
      <Text style={styles.username}> username </Text>

      <View style={styles.component}>
        <TextInput
          style={styles.textinput}
          placeholder="new fullname"
          keyboardType="default"
        />

        <TouchableOpacity
          style={styles.button}
          // onPress={() => {
          //   editUser({ ...userToEdit, fullname: userToEditName })
          //     .then((d) => {
          //       onSave();
          //       console.log(userToEditName);
          //     })
          //     .catch((e) => console.log(e));
          // }}
        >
          <Text style={styles.buttontext}>update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  userimage: {
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: "center",
  },
  username: {
    fontSize: 28,
    fontWeight: "300",
    marginTop: 10,
    marginBottom: 10,
  },
  component: {
    flex: 1,
    backgroundColor: "#003a55",
    borderRadius: 20,
    marginVertical: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  textinput: {
    marginBottom: 20,
    paddingLeft: 5,
    width: "75%",
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 15,
  },
  buttontext: {
    color: "#005e88",
    fontSize: 15,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#FFF",
    marginTop: 20,
    width: 120,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { Dimensions, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Image } from "react-native";
import { React, useState } from "react";
import { forgotpassword } from "../../db/Auth";
import Logo from '../../assets/2511582.jpg'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleforgotpassword = () => {
        forgotpassword(email)
            .then(navigation.navigate('SignIn'))
            .catch((e) => setError(e.message));
    }

    return (
        <KeyboardAvoidingView style={styles.mainview} >
            <View style={styles.View}>
                <View style={styles.screen}>
                    <Image source={Logo} style={styles.image} />
                </View>


                <View style={styles.format}>
                    <TextInput
                        style={styles.textinput}
                        placeholder="example@email.com"
                        placeholderTextColor={'#f2e9e4'}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>


                <View>
                    <TouchableOpacity style={styles.buttonstyle} onPress={handleforgotpassword}>
                        <Text style={styles.buttontext}>Reset Password</Text>
                    </TouchableOpacity>
                </View>


                <Text style={styles.errorText}>{error}</Text>

            </View>
        </KeyboardAvoidingView>

    );
};

export default Login;

const cardwidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: "#f2e9e4",
    alignItems: "center",
    justifyContent: 'center',
  },
  // 22223b
  View: {
    backgroundColor: '#22223b',
    borderRadius: 20,
    width: cardwidth - 100,
    height: 500,
    paddingHorizontal: 25,
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: .25,
    shadowRadius: 3
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 20,
    color: '#f2e9e4'
  },
  textinput: {
    height: 40,
    color: '#f2e9e4',
    borderBottomColor: "#f2e9e4",
    borderBottomWidth: 4,
  },
  format: {
    paddingBottom: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  buttonstyle: {
    backgroundColor: '#f2e9e4',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttontextstyle: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttontext: {
    color: '#22223b',
    fontWeight: '700',
    fontSize: 16,
  },
  errorText: {
    color: '#22223b'
  },
});


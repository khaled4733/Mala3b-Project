import { TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Image } from "react-native";
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
            <View style={styles.screen}>
                <Image source={Logo} style={styles.image} />
            </View>


            <View style={styles.format}>
                <TextInput
                    style={styles.textinput}
                    placeholder="example@email.com"
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
        </KeyboardAvoidingView>

    );
};

export default Login;

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 60,
        alignSelf: "stretch",

    },
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 20
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        paddingBottom: 20
    },
    textinput: {
        height: 40,
        color: '#0075aa',
        borderBottomColor: "#cae9ff",
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
        backgroundColor: '#022b3a',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttontext: {
        color: '#FFF',
        fontWeight: '700',
        fontSize: 16,
    },
    errorText: {
        color: 'rgb(255, 255, 255)'
    },


});


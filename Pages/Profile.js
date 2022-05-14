import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { signout } from '../db/Auth'



export default function Profile({ navigation, route }) {
    const { user } = route.params;
    console.log(user);

    const handleSignOut = () => {
        signout()
            .then(alert("signout successful"))
            .catch(error => alert(error.message))
        console.log("signout successful");
    }
    return (
        <View style={styles.container}>
            <Text>email is : {user.email}</Text>
            <View>
                <TouchableOpacity style={styles.buttonstyle} onPress={handleSignOut}>
                    <Text style={styles.buttontext}>LogOut</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonstyle: {
        backgroundColor: '#022b3a',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',

    },
    buttontext: {
        color: 'rgb(255, 255, 255)',
        fontWeight: '700',
        fontSize: 16,
    },
})
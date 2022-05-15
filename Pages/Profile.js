import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { signout } from '../db/Auth'



export default function Profile({ navigation,  }) {


    const handleSignOut = () => {
        signout()
            .then(alert("signout successful"))
            .catch(error => alert(error.message))
        console.log("signout successful");
    }

    const handleadminarea = () => {
        if (user.role == 1) {
            navigation.navigate('AdminArea')
        } else {
            alert("you dont have permmision to enter the area")
        }
    }
    return (
        <View style={styles.container}>
                <TouchableOpacity style={styles.buttonstyle} onPress={handleSignOut}>
                    <Text style={styles.buttontext}>LogOut</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonstyle} onPress={()=>{navigation.navigate('AdminArea')}}>
                    <Text style={styles.buttontext}>admin</Text>
                </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40
    },
    buttonstyle: {
        backgroundColor: '#022b3a',
        width: '100%',
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30
    },
    buttontext: {
        color: 'rgb(255, 255, 255)',
        fontWeight: '700',
        fontSize: 16,
        
    },
})
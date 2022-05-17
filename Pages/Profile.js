import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Dimensions } from 'react-native'
import { signout } from '../db/Auth'
import React, { useState, useEffect } from "react";
import { getUsers } from '../db/User'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export default function Profile({ navigation, route }) {

    const { user } = route.params

    const [users, setUsers] = useState([]);
    let e;

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data);
        });
    }, []);


    users.map((item, index) => {
        if (item.email == user.email) {
            e = item;
            console.log(e.email)
        }
    })

    const handleSignOut = () => {
        signout()
            .then(alert("signout successful"))
            .catch(error => alert(error.message))
        console.log("signout successful");
    }

    const handleadminarea = () => {
        if (e.role == 1) {
            navigation.navigate('AdminArea')
        } else {
            alert("you dont have permmision to enter the area")
        }
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.box1}>

                </View>
            </View>

            <View style={styles.row}>
                <Icon name="email" color={'#777777'} size={30} />
                <View style={styles.box}>
                    <Text style={{ color: '#FFF', marginLeft: 10, fontSize: 20 }}> {user.email} </Text>
                </View>
            </View>

            <View style={styles.row}>
                <Icon name="cash-multiple" color={'#777777'} size={30} />
                <View style={styles.box}>
                    <Text style={{ color: '#FFF', marginLeft: 10, fontSize: 20 }}> 200$ </Text>
                </View>
            </View>

            <View style={styles.row}>
                <Icon name="calendar-month-outline" color={'#777777'} size={30} />
                <View style={styles.box}>
                    <Text style={{ color: '#FFF', marginLeft: 10, fontSize: 20 }}> 12/01/2002 </Text>
                </View>
            </View>

            <View style={styles.row}>
                <Icon name="cellphone" color={'#777777'} size={30} />
                <View style={styles.box}>
                    <Text style={{ color: '#FFF', marginLeft: 10, fontSize: 20 }}> +201156374188 </Text>
                </View>
            </View>

            <View style={styles.row}>
                <Icon name="gender-male-female" color={'#777777'} size={30} />
                <View style={styles.box}>
                    <Text style={{ color: '#FFF', marginLeft: 10, fontSize: 20 }}> male </Text>
                </View>
            </View>

            <View style={styles.row}>
                <Icon name="email" color={'#777777'} size={30} />
                <View style={styles.box}>
                    <TouchableOpacity style={styles.buttonstyle} onPress={handleadminarea}>
                        <Text style={styles.buttontext}>admin</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.row}>
                <Icon name="logout" color={'#777777'} size={30} />
                <View style={styles.box}>
                    <TouchableOpacity style={styles.buttonstyle} onPress={handleSignOut} >
                        <Text style={styles.buttontext}>LogOut</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>

    )
}


const cardwidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    box1: {
        backgroundColor: '#056284',
        borderRadius: 20,
        marginVertical: 20,
        width: cardwidth - 65,
        height: 200,
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
        marginLeft: 20,
        marginBottom: 30
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
        color: '#FFF',
        fontWeight: '700',
        fontSize: 16,
    },
    box: {
        marginLeft: 10,
        width: '75%',
        height: 40,
        backgroundColor: '#022b3a',
        borderRadius: 15,
        justifyContent: 'center'
    }
})


{/* <TouchableOpacity style={styles.buttonstyle} onPress={handleSignOut}>
                <Text style={styles.buttontext}>LogOut</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonstyle} onPress={handleadminarea}>
                <Text style={styles.buttontext}>admin</Text>
            </TouchableOpacity> */}
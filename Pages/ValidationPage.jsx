import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView, Dimensions
} from "react-native";
import React, { useState } from "react";
import { addFStadium, deleteFStadium, getFStadium } from "../db/Stadium/Football";
import { getUserUId } from "../db/Auth";
import { updateFAvailable } from "../db/User";


export default function ValidationPage({ navigation, route }) {

    let { name: stadName } = route.params; //name -> att. in doc.

    const [stDate, setStDate] = useState("") //start date
    const [edDate, setEdDate] = useState("")//end date
    const [day, setDay] = useState("")

    function handel() {
        console.log('begin handle', stadName);
        if (stDate !== '' && edDate !== '' && day !== '' && stDate !== edDate) {
            console.log('after validate');
            getFStadium().then((data) => {
                console.log('number of stad size=', data.length);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].name === stadName) {
                        console.log('found the stad', data[i]);
                        let flag = true; // true ->stad is available
                        if (data[i].state === null) { //if there is no array, set a new one
                            data[i].state = []; //new array
                        }
                        /* add "balance" in db and manage it here*/
                        for (let j = 0; j < data[i].state.length; j++) {
                            if (data[i].state[j].day === day) { //same day isn't enough
                                if ((stDate < data[i].state[j].edDate && stDate >= data[i].state[j].stDate) || //check in same hours interval
                                    (data[i].state[j].stDate >= stDate && data[i].state[j].stDate < edDate))
                                    alert("already occupied");
                                flag = false; //stad is unavailable after occupation
                                navigation.navigate('Football');
                                break;
                            }
                        }
                        if (flag) { //if flag is available i.e. "true", add userId with the "date" that he
                            getUserUId().then((id) => { // gets id of current user in "id"
                                data[i].state.push({ day, stDate, edDate, id }); //note that we made "id" same as "document ID" manually
                                updateFAvailable(data[i]);
                            });
                            navigation.navigate('Payment', { stDate, edDate, day });
                        }
                        break;
                    }
                }
            });
        } else {
            alert("data is required")
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.component}>

                <TextInput
                    style={styles.textinput}
                    placeholder="Enter the day"
                    onChangeText={setDay}
                    keyboardType="default"
                />

                <TextInput
                    style={styles.textinput}
                    placeholder="Enter start time"
                    onChangeText={setStDate}
                    keyboardType="default"
                />

                <TextInput
                    style={styles.textinput}
                    placeholder="Enter end time"
                    onChangeText={setEdDate}
                    keyboardType="default"
                />

                <TouchableOpacity style={styles.button} onPress={handel}>
                    <Text style={styles.buttontext}>Book</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}
const cardwidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    component: {
        flex: 1,
        backgroundColor: '#003a55',
        borderRadius: 20,
        width: cardwidth - 100,
        marginVertical: 60,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: .25,
        shadowRadius: 3
    },
    textinput: {
        marginBottom: 20,
        paddingLeft: 5,
        width: '75%',
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 15
    },
    buttontext: {
        color: '#005e88',
        fontSize: 15,
        fontWeight: '500'
    },
    button: {
        backgroundColor: '#FFF',
        marginTop: 20,
        width: 120,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
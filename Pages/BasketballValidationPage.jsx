import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView, Image, Button, Dimensions
} from "react-native";
import React, {useEffect, useState} from "react";
// import {addFStadium, deleteFStadium, getFStadium} from "../db/Stadium/Football";
// import footballBackground from "../assets/footballBackground.png";
// import tennisBackground from "../assets/tennisBackground.png";
// import basketballBackground from "../assets/basketballBackground.png";
import {getUserUId} from "../db/Auth";
import {updateBasketball, updateFootball, updateTennis} from "../db/User";
import {getBStadium} from "../db/Stadium/Basketball";
import {getTStadium} from "../db/Stadium/Tennis";


export default function BasketballValidationPage ({navigation, route}) {

    let {name: stadName} = route.params; //name -> att. in doc.

    const [stDate,setStDate] = useState("") //start date
    const [edDate,setEdDate] = useState("")//end date
    const [day,setDay] =  useState("")

    function handel(){
        /*Handle football*/
            console.log('begin handle', stadName);
            console.log('after validate');


        /*Handle basketball*/
            getBStadium().then((data) => {
                if (stDate !== '' && edDate !== '' && day !== '' && stDate !== edDate) {
                    console.log('number of Bstad = ', data.length);
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].name === stadName) {  /* This identifies the stadium type !!!!!!!! */
                            console.log('found the stad', stadName);
                            let flag = true; // true ->stad is available
                            if (data[i].state === null) { //if there is no array, set a new one
                                data[i].state = []; //new array
                            }
                            for (let j = 0; j < data[i].state.length; j++) {
                                if (data[i].state[j].day === day) { //same day isn't enough
                                    if ((stDate < data[i].state[j].edDate && stDate >= data[i].state[j].stDate) || //check in same hours interval
                                        (data[i].state[j].stDate >= stDate && data[i].state[j].stDate < edDate)) {
                                        alert("Basket Stadium already occupied");
                                        flag = false; //stad is unavailable after occupation
                                        navigation.navigate('Basketball');
                                        return;
                                    }
                                }
                            }
                            if (flag) { //if flag is available i.e. "true", add userId with the "date" that he
                                getUserUId().then((id) => { // gets id of current user in "id"
                                navigation.navigate('Payment', {stadName,day, stDate, edDate, id});
                                });
                            }
                            break;
                        }
                    }
                }
                else {
                    alert("data is required")
                }
            });

    }


    return (
        <View style={styles.container}>
            <View style={styles.component}>
                <TextInput
                    style={styles.textinput}
                    placeholder="Enter the day"
                    onChangeText={setDay}
                    keyboardType="default"
                    placeholderTextColor={"#22223b"}
                />

                <TextInput
                    style={styles.textinput}
                    placeholder="Enter start time"
                    onChangeText={setStDate}
                    keyboardType="default"
                    placeholderTextColor={"#22223b"}
                />

                <TextInput
                    style={styles.textinput}
                    placeholder="Enter end time"
                    onChangeText={setEdDate}
                    keyboardType="default"
                    placeholderTextColor={"#22223b"}
                />

                <TouchableOpacity style={styles.button} onPress={handel}>
                    <Text style={styles.buttontext}>Book</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const cardwidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f2e9e4",
    },
    component: {
        flex: 1,
        backgroundColor: "#22223b",
        borderRadius: 20,
        width: cardwidth - 100,
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
        backgroundColor: "#f2e9e4",
        borderRadius: 15,
    },
    buttontext: {
        color: "#22223b",
        fontSize: 15,
        fontWeight: "500",
    },
    button: {
        backgroundColor: "#f2e9e4",
        marginTop: 20,
        width: 120,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});

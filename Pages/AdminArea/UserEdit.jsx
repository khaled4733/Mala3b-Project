import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Dimensions
} from "react-native";

import React, { useState } from "react";
import { addFStadium, deleteFStadium, updateFStadium } from "../../db/Stadium/Football";

const UserEdit = ({ navigation }) => {
    const [id, setid] = useState("");
    const [balance, setBalance] = useState("");

    const [idu, setidu] = useState("");

    // const [error, setError] = useState("");

    function updatebalance() {
        var user = {
            balance: balance,
            id: id
        };

        addFStadium(football, id).then(alert("done!"));
        console.log("football", football);
        setid('');
        setBalance('');
    }

    function deleteUser() {
        deleteFStadium(idu).then(alert("done!"));
        setidu('');
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.addView}>
                    <Text style={styles.title}>Update user's balance</Text>

                    <View>
                        <TextInput
                            style={styles.textinput}
                            placeholder="id"
                            value={id}
                            onChangeText={(text) => setid(text)}
                            keyboardType="default"
                        />

                        <TextInput
                            style={styles.textinput}
                            placeholder="balance"
                            value={balance}
                            onChangeText={(text) => setname(text)}
                            keyboardType="default"
                        />
                    </View>

                    <View style={styles.format}>
                        <TouchableOpacity
                            style={styles.buttonstyle}
                            onPress={() => updatebalance()}
                        >
                            <Text style={styles.buttontext}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={styles.line}></View>

                <View style={styles.addView}>
                    <Text style={styles.title}>delete User</Text>
                    <View>
                        <TextInput
                            style={styles.textinput}
                            placeholder="enter id"
                            value={idu}
                            onChangeText={(text) => setidu(text)}
                            keyboardType="default"
                        />
                    </View>
                    <View style={styles.format}>
                        <TouchableOpacity
                            style={styles.buttonstyle}
                            onPress={deleteUser}
                        >

                            <Text style={styles.buttontext}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
};
export default UserEdit;

const cardwidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2e9e4",
        alignItems: 'center'
    },
    addView: {
        backgroundColor: '#22223b',
        borderRadius: 20,
        width: cardwidth - 100,
        height: 500,
        paddingHorizontal: 25,
        marginVertical: 15,
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: .25,
        shadowRadius: 3
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        paddingBottom: 10,
        color: '#f2e9e4'
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
});
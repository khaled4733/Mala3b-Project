import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function BasketballEdit({ navigation }) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [pic, setPic] = useState("");
    const [link, setLink] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState("");
    const [error, setError] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>add Stadium</Text>
            <View>
                <TextInput
                    style={styles.textinput}
                    placeholder="id"
                    onChangeText={setId}
                    keyboardType="default"
                />

                <TextInput
                    style={styles.textinput}
                    placeholder="name"
                    onChangeText={setName}
                    keyboardType="default"
                />

                <TextInput
                    style={styles.textinput}
                    placeholder="picture link"
                    onChangeText={setPic}
                    keyboardType="default"
                />

                <TextInput
                    style={styles.textinput}
                    placeholder="location link"
                    onChangeText={setLink}
                    keyboardType="default"
                />

                <TextInput
                    style={styles.textinput}
                    placeholder="date"
                    onChangeText={setDate}
                    keyboardType="default"
                />

                <TextInput
                    style={styles.textinput}
                    placeholder="price"
                    onChangeText={setPrice}
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.textinput}
                    placeholder="name"
                    onChangeText={setAvailable}
                    keyboardType="default"
                />
            </View>
            <View style={styles.format}>
                <TouchableOpacity style={styles.buttonstyle} onPress={() => { alert('done!') }}>
                    <Text style={styles.buttontext}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>

            <Text style={styles.title}>delete Stadium</Text>
            <View>
                <TextInput
                    style={styles.textinput}
                    placeholder="enter id"
                    onChangeText={setId}
                    keyboardType="default"
                />

            </View>

            <View style={styles.format}>
                <TouchableOpacity style={styles.buttonstyle} onPress={() => { alert('done!') }}>
                    <Text style={styles.buttontext}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    buttonstyle: {
        backgroundColor: '#022b3a',
        width: '50%',
        height: 40,
        marginBottom: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttontext: {
        color: 'rgb(255, 255, 255)',
        fontWeight: '700',
        fontSize: 16,
    },
    textinput: {
        height: 40,
        color: 'rgb(255, 255, 255)',
        borderBottomColor: "#cae9ff",
        borderBottomWidth: 4,

    },
    format: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        width: '100%',
        backgroundColor: '#000000',
        height: 1
    }
})
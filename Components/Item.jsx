import { TouchableOpacity, View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function item({ e }) {
    return (
        <View style={styles.container}>
            <View style={styles.itemstyle}>

            </View>
            <TouchableOpacity style={styles.buttonstyle} onPress={() => { navigation.navigate('Stadium') }}>
                <Text style={styles.buttontext}>{stadium.map((item, index) => { return (<Text> {item.name} </Text>) })}</Text>
                <Text style={styles.buttontext}>For more info press here</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 15
    },
    itemstyle: {
        maxWidth: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 100,
        borderColor: '#000000'
    },
})


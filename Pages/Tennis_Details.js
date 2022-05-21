import {
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Linking,
} from "react-native";
import React from "react";

export default function Tennis_Details({ route, navigation }) {
    let { e: stad } = route.params;

    function handle() {
        console.log("entered handle in Stadium.js")
        navigation.navigate("TennisValidationPage", { name: stad.name });
    }

    function location() {
        Linking.openURL(stad.link)
            .then()
            .catch((err) => console.error("An error occurred", err));
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.screen}>
                <View style={styles.imageView}>
                    <Image source={{ uri: stad.pic }} style={styles.image} />
                </View>
            </View>

            <View style={styles.rightStyle}>
                <View style={styles.button}>
                    <Text style={styles.buttontext}> {stad.name} </Text>
                </View>
            </View>

            <View style={styles.leftStyle}>
                <TouchableOpacity style={styles.button2} onPress={location}>
                    <Text style={styles.buttontext}> Location </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.rightStyle}>
                <View style={styles.button}>
                    <Text style={styles.buttontext}>{stad.price} L.E </Text>
                </View>
            </View>

            <View style={styles.screen}>
                <TouchableOpacity style={styles.button3} onPress={handle}>
                    <Text style={styles.buttontext}> Book </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: "#22223b",
    },
    cover: {
        backgroundColor: "#056284",
        borderRadius: 10,
        borderColor: "#808080",
        borderWidth: 2,
    },
    screen: {
        alignItems: "center",
    },
    imageView: {
        width: "75%",
        height: 200,
        borderRadius: 20,
        shadowColor: "#FFF",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 20,
    },
    leftStyle: {
        alignItems: "flex-start",
        marginVertical: 20,
    },
    rightStyle: {
        alignItems: "flex-end",
        marginVertical: 20,
    },
    buttontext: {
        color: "#22223b",
        fontSize: 20,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#f2e9e4",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: "60%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#FFF",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
    },
    button2: {
        backgroundColor: "#f2e9e4",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        width: "60%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#00b381",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
    },
    button3: {
        backgroundColor: "#f2e9e4",
        borderRadius: 10,
        width: "60%",
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
});

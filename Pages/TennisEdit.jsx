import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { addTStadium, deleteTStadium } from "../db/Stadium/Tennis";


export default function TennisEdit({ navigation }) {
    const [id, setid] = useState("");
    const [name, setname] = useState("");
    const [pic, setpic] = useState("");
    const [link, setlink] = useState("");
    const [date, setdate] = useState("");
    const [price, setprice] = useState("");
    const [available, setavailable] = useState("");

    function addtennis() {
        var tennis = {
          name: name,
          pic: pic,
          price: price,
          link: link,
          date: date,
          id: id,
          available: available,
        };
    
        addTStadium(tennis);
        console.log("football", tennis);
      }
    
      //   function deletefootball() {
      //     id: id;
      //     deleteFStadium(id);
      //   }
    
      return (
        <View style={styles.container}>
          <Text style={styles.title}>add Stadium</Text>
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
              placeholder="name"
              value={name}
              onChangeText={(text) => setname(text)}
              keyboardType="default"
            />
    
            <TextInput
              style={styles.textinput}
              placeholder="picture link"
              value={pic}
              onChangeText={(text) => setpic(text)}
              keyboardType="default"
            />
    
            <TextInput
              style={styles.textinput}
              placeholder="location link"
              value={link}
              onChangeText={(text) => setlink(text)}
              keyboardType="default"
            />
    
            <TextInput
              style={styles.textinput}
              placeholder="date"
              value={date}
              onChangeText={(text) => setdate(text)}
              keyboardType="default"
            />
    
            <TextInput
              style={styles.textinput}
              placeholder="price"
              value={price}
              onChangeText={(text) => setprice(text)}
              keyboardType="default"
            />
    
            <TextInput
              style={styles.textinput}
              placeholder="available"
              value={available}
              onChangeText={(text) => setavailable(text)}
              keyboardType="default"
            />
          </View>
          <View style={styles.format}>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={() => addtennis()}
            >
              <Text style={styles.buttontext}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line}></View>
    
          <Text style={styles.title}>delete Stadium</Text>
          <View>
            <TextInput
              style={styles.textinput}
              placeholder="enter id"
              value={id}
              onChangeText={(text) => setid(text)}
              keyboardType="default"
            />
          </View>
    
          <View style={styles.format}>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={() => deleteTStadium(id)}
            >
              <Text style={styles.buttontext}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };


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
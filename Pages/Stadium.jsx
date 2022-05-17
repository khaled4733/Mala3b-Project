import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function Stadium({ route, navigation }) {
  let {e : stad} = route.params;

  function handle() {                          
    navigation.navigate('ValidationPage', { name: stad.name })

  }

  function location() {
    Linking.openURL(stad.link)
      .then()
      .catch((err) => console.error('An error occurred', err))
  }

  return (
    <ScrollView>
      <View style={styles.container}>

          <View style={styles.screen}>
            <Image source={{ uri: stad.pic }} style={styles.image} />
          </View>

          <View style={styles.rightStyle}>
            <View style={styles.button}>
              <Text style={styles.buttontext}> {stad.name} </Text>
            </View>
          </View>

          <View style={styles.leftStyle}>
            <View style={styles.button2}>
              <Text style={styles.buttontext}>Rating will be here</Text>
            </View>
          </View>

          <View style={styles.rightStyle}>
            <View style={styles.button}>
              <Text style={styles.buttontext}>{stad.price}</Text>
            </View>
          </View>

          <View style={styles.leftStyle}>
            <TouchableOpacity style={styles.button2} onPress={location}>
              <Text style={styles.buttontext}> Location </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.screen}>
            <TouchableOpacity style={styles.button3} onPress={handle}>
              <Text style={styles.buttontext}> Book </Text>
            </TouchableOpacity>
          </View>

        </View>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,

  },
  cover: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#808080',
    borderWidth: 2
  },
  screen: {
    alignItems: 'center'
  },
  image: {
    width: '75%',
    height: 200,
    borderRadius: 20
  },
  leftStyle: {
    alignItems: 'flex-start',
    marginVertical: 20
  },
  rightStyle: {
    alignItems: 'flex-end',
    marginVertical: 20
  },
  buttontext: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#00626f',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: .25,
    shadowRadius: 2
  },
  button2: {
    backgroundColor: '#00626f',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: .25,
    shadowRadius: 2
  },
  button3: {
    backgroundColor: '#00626f',
    borderRadius: 10,
    width: '60%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    
  },
});
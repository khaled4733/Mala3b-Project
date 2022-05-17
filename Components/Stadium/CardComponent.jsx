import { TouchableOpacity, View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
export default function CardComponent({ e, navigation }) {

  return (
    <View style={styles.Container}>
      <View style={styles.CardContainer}>

        <Image source={{uri : e.pic}} style={styles.image} />

        <View style={styles.style1}>
          <Text style={styles.title}> {e.name} </Text>
          <Text style={styles.title}> Rating </Text>
        </View>

        <View style={styles.style2}>

          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Stadium' , {e : e})}}>
            <Text style={styles.buttontext}>Details</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  )
}

const cardwidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  CardContainer: {
    borderRadius: 20,
    width: cardwidth - 40,
    height: 240,

    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: .25,
    shadowRadius: 3
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: cardwidth - 40,
    height: 130,
    opacity: 0.9,
    marginBottom: 5
  },
  title: {
    justifyContent: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttontext: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500'
  },
  style1: {
    marginLeft: 5
  },
  style2: {
    alignItems: 'flex-end',

  },
  button: {
    backgroundColor: '#022b3a',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


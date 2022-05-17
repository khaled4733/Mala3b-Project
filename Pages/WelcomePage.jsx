import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WelcomePage = ({navigation}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome to Mal3ab!</Text>

      <TouchableOpacity style={styles.signinbutton} onPress={()=>{navigation.navigate('SignIn')}}>
        <Text style={styles.buttontext}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerbutton} onPress={()=>{navigation.navigate('Register')}}>
        <Text style={styles.buttontext}>Register</Text>
      </TouchableOpacity>

    </View>
  )
}

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#056284'
  },
  signinbutton: {
    width: '100%',
    height: 40,
    backgroundColor: '#7687db',
    marginVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerbutton: {
    width: '100%',
    height: 40,
    backgroundColor: '#8f45a9',
    marginVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttontext: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF'
  }
})
import React, {Component} from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'

import Logo from '../../Images/logo.png'
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../Images/logo.png')}/>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#e74c3c'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 120,
    height: 100,
    resizeMode: 'stretch'
  }
});
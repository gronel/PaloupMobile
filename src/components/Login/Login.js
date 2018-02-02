import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const Login = props => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid='#1c313a'
        placeholder="Email"
        placeholderTextColor="#95a5a6"
        selectionColor="#fff"
        keyboardType="email-address"
        onSubmitEditing={() => this.password.focus()}/>
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid='#1c313a'
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#95a5a6"
        ref={(input) => this.password = input}/>
      <TouchableOpacity style={styles.button} onPress={props.loginHandler}>
        <Text style={styles.buttonText}>{props.type}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#2c3e50',
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: '#e74c3c',
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }

});

export default Login;
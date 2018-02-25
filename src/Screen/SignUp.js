import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


const SignUp = props => {

  return (
    <View style={styles.container}>
     <TextInput
        style={styles.inputBox}
        underlineColorAndroid='#1c313a'
        placeholder="First Name"
        placeholderTextColor="#95a5a6"
        onSubmitEditing={() => this.lastname.focus()}/>
          <TextInput
        style={styles.inputBox}
        underlineColorAndroid='#1c313a'
        placeholder="Last Name"
        placeholderTextColor="#95a5a6"
        ref={(input) => this.lastname = input}
        onSubmitEditing={() => this.email.focus()}/>
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid='#1c313a'
        placeholder="Email"
        placeholderTextColor="#95a5a6"
        keyboardType="email-address"
        ref={(input) => this.email = input}
        onSubmitEditing={() => this.password.focus()}/>
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid='#1c313a'
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#95a5a6"
        ref={(input) => this.password = input}/>
      <TouchableOpacity style={styles.button} onPress={props.signUpHander}>
        <Text style={styles.buttonText}>Register</Text>
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

export default SignUp;
import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Login/Login';

import MainTab from '../Screen/MainTabs';

export default class Login extends Component {


  constructor(props) {
    super(props);
    this
      .props
      .navigator
      .setOnNavigatorEvent(this.onNavigatorEvent);
  }
  componentDidMount(){
  
  }

  

  loginHandler = () => {
    MainTab();
  };

  signupHandler = () => {
    this
      .props
      .navigator
      .push({screen: "com.paloupmobile.SignUp", title: "SignUp"});
  }

  render() {
    return (

      <View style={styles.container}>
           <StatusBar backgroundColor="#e74c3c"/>
        <Logo/>
        <Form type="Login" loginHandler={this.loginHandler}/>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={this.signupHandler}>
            <Text style={styles.signupButton}>
              Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: '#34495e',
    fontSize: 16
  },
  signupButton: {
    color: '#e74c3c',
    fontSize: 16,
    fontWeight: '500'
  }
});

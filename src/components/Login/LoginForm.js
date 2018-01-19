//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';

// create a component
class LoginForm extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#e74c3c"/>
                <TextInput
                    placeholder="username or email"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    style={styles.input}
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    />
                
                <TextInput
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    secureTextEntry
                    returnKeyType="go"
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}/>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity >
            </KeyboardAvoidingView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: "#c0392b",
        paddingVertical:15,
        marginBottom:10
    },
    buttonText: {
        textAlign:'center',
        color: '#FFFFFF',
        fontWeight:'700'
    }
});

//make this component available to the app
export default LoginForm;
import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import Form from '../SignUp/SingUp';
export default class componentName extends Component {

    signUpHander = () => {

    }

    backToLoginHandler = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <Form backToLoginHandler={this.backToLoginHandler} signUpHander={this.signUpHander} />
                <View style={styles.noteView}>
                    <Text style={styles.noteText}>Don't have an account yet?</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }, noteView: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    noteText: {
        color: '#34495e',
        fontSize: 16
    },
});

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyPalo from '../components/Dashboard/MyPalo';
import OfflineNotice from '../components/OfflineNotice/OfflineNotice';
// create a component
class Stat extends Component {
    render() {
        return (
            <View>
                <OfflineNotice/>
                      <MyPalo /> 
            </View>
     
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
    },
    MyPaloView: {
        height: 300,
        width: "100%",
        backgroundColor: '#2ecc71',
    }
});

//make this component available to the app
export default Stat;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button} from 'react-native-elements';

import TaskList from "../components/Task/TaskList";

import AcknowledgementData from "../data/mypalo/AcknowledgementPending.json";
import CameraRollPicker from 'react-native-camera-roll-picker';

// create a component
class MyPalo extends Component {

    state = {
        file: [],
        AcknowledgementData:AcknowledgementData
    }
 
    onItemSelected= () =>{
      
          
    }

    onSelectFile =()=>{

    }

    render() {

        return (
            <View style={styles.container}>
       <CameraRollPicker
  callback={this.onSelectFile.bind(this)} />
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
  
    },
});

//make this component available to the app
export default MyPalo;

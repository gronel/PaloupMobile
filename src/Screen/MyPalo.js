//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TaskList from "../components/Task/TaskList";

import AcknowledgementData from "../data/mypalo/AcknowledgementPending.json";


// create a component
class MyPalo extends Component {

    state = {
        AcknowledgementData:AcknowledgementData
    }

    onItemSelected= () =>{

    }

    render() {

        console.log(this.state.AcknowledgementData[0].aa.issueId);
        return (
            <View style={styles.container}>
               <TaskList
               data={this.state.AcknowledgementData}
               onItemSelected={this.onItemSelected}/>
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

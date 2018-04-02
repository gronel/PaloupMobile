//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { List, CheckBox, ListItem, Card, Button } from 'react-native-elements';

import AcknowledgementData from "../data/mypalo/AcknowledgementPending.json";
import CameraRollPicker from 'react-native-camera-roll-picker';

//import ImagePicker from 'react-native-image-crop-picker';
//import OneSignal from 'react-native-onesignal'; // Import package from node modules

// create a component
class MyPalo extends Component {

    state = {
        file: [],
        data: AcknowledgementData
    }

    // componentWillMount() {
    //     OneSignal.addEventListener('received', this.onReceived);
    //     OneSignal.addEventListener('opened', this.onOpened);
    //     OneSignal.addEventListener('ids', this.onIds);
    // }

    // componentWillUnmount() {
    //     OneSignal.removeEventListener('received', this.onReceived);
    //     OneSignal.removeEventListener('opened', this.onOpened);
    //     OneSignal.removeEventListener('ids', this.onIds);
    // }

    // onReceived(notification) {
    //     console.log("Notification received: ", notification);
    // }

    // onOpened(openResult) {
    //     console.log('Message: ', openResult.notification.payload.body);
    //     console.log('Data: ', openResult.notification.payload.additionalData);
    //     console.log('isActive: ', openResult.notification.isAppInFocus);
    //     console.log('openResult: ', openResult);
    // }

    // onIds(device) {
    //     console.log('Device info: ', device);
    // }

    // onItemSelected= () =>{
    //     ImagePicker.openPicker({
    //         multiple: true
    //       }).then(images => {
    //         console.log(images);
    //       });

    // }

    onSelectFile = () => {

    }

    _renderItem = ({ item }) => {

        return (
            <View style={[styles.taskCardLayout, { backgroundColor: item.bgcolor, }]}>
                <View style={{ flexDirection: 'row', alignContent: "space-between" }}>
                    <Text style={{ color: 'white' }}>{item.issueId}</Text>
                    <Text style={{ color: 'white' }}>{item.Details}</Text>
                </View>

                <Text style={{ color: 'white' }}>Action Plan: {item.actionplan}</Text>
            </View>



        )
    };

    render() {

        return (
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }} >
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.issueId}
                    renderItem={this._renderItem}
                />
            </List>
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
    taskCardLayout: {
        margin: 3,

    }
});

//make this component available to the app
export default MyPalo;

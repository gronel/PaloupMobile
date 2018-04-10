//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { List, CheckBox, ListItem, Card, Button, SearchBar } from 'react-native-elements';

import AcknowledgementData from "../data/mypalo/AcknowledgementPending.json";
import CameraRollPicker from 'react-native-camera-roll-picker';
import OfflineNotice from '../components/OfflineNotice/OfflineNotice';
import { NetInfo } from 'react-native'
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

    someMethod = () => {

    };

    render() {

        return (
            <View style={styles.container}>
           
                <SearchBar
                    lightTheme
                    onChangeText={this.someMethod}
                    onClear={this.someMethod}
                    icon={{ type: 'font-awesome', name: 'search' }}
                    cancelButtonTitle="Cancel"
                    placeholder='Type Here...' />
     <OfflineNotice />
                <List containerStyle={{ borderTopWidth: 0, marginTop: 1, borderBottomWidth: 0 }} >

                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.issueId}
                        renderItem={this._renderItem}
                    />
                </List>
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,

    },
    taskCardLayout: {
        margin: 3,
        backgroundColor: "red"
    }
});

//make this component available to the app
export default MyPalo;

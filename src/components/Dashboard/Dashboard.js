//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ChartView from 'react-native-highcharts';
import Mypalo from './MyPalo';
import OpenIssueContributor from './MypaloOpenIssueContributor';

// create a component
class Dashboard extends Component {
    render() {
        return (
            <View>
                <Mypalo/>

                <OpenIssueContributor/>
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
        backgroundColor: '#ecf0f1'
    }
});

//make this component available to the app
export default Dashboard;

//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ChartView from 'react-native-highcharts';
// create a component
class MypaloOpenIssueContributor extends Component {
    render() {
        var Highcharts = 'Highcharts';
        var conf = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Stacked bar chart'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Jane',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5]
            }]
        };
        return (
            <ChartView
                style={{
                height: 300
            }}
                config={conf}></ChartView>
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
export default MypaloOpenIssueContributor;

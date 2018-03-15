import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';

const TaskItem = props => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Text>{props.issueId}</Text>
            <Text>{props.CurrentTopicDescription}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
      width: "100%",
      marginBottom: 5,
      padding: 10,
      flexDirection: "row",
    }
});

export default TaskItem;

import React, { Component } from 'react';
import { ImageBackground , Image ,StyleSheet} from 'react-native';

import bg from '../../Images/bg.jpg';

export default class Wallpaper extends Component {
render() {
    return (
        <ImageBackground style={styles.picture} source={bg}>
         {this.props.children}
        </ImageBackground>
    );
}

}
const styles = StyleSheet.create({
    picture : {
        flex:1,
        width:null,
        height:null,
        justifyContent:'center',
        alignItems:'center'
    }
});
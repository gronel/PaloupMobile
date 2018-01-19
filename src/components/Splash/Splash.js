import React, { Component } from 'react';
import { View , Image ,StyleSheet} from 'react-native';


import Logo from '../../Images/logo.png'

import Wallpaper from './Wallpaper';

export default class Splash extends Component {
render() {
    return (
       <Wallpaper>
                <Image source={Logo} style={styles.logo} resizeMode='stretch'/>
       </Wallpaper>
        
      
    );
}

}
const styles = StyleSheet.create({
    logo: {
        width:200,
        height: 170,
        padding: 10
    }
});
import React, { Component } from 'react';
import { AsyncStorage, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import BG from '../../gameImages/GameBG.png';


class InitiatingPage extends Component {
   
    render() {
        console.disableYellowBox = true; 
        return (
            <ImageBackground style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'stretch' }}
                source={BG}
            >
            </ImageBackground>
        )
    }
}



export default withNavigation(InitiatingPage);
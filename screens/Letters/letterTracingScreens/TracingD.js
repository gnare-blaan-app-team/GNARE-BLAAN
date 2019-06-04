import React, { Component } from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet';

import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

class TracingD extends Component {
    static navigationOptions = {
        header: null,
    }

    goBack = () => {
        this.props.navigation.navigate('pageB');
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../lettersImage/letter_D.gif')}
            >
                <View style={globalStyleSheet.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={Back_icon}
                            style={globalStyleSheet.back}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={Home_icon}
                            style={globalStyleSheet.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(TracingD);
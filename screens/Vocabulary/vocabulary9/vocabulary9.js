import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Vocab9BG from './vocabulary9Images/calendarBG.png';


import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Vocabulary9 extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    handleBackPress = () => {
        this.number1.pause();
    }

    goBack = () => {
        this.props.navigation.navigate('vocabularyMenu');
    }


    render() {

        return (
            <ImageBackground style={globalStyleSheet.image}
                source={Vocab9BG}>
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

const styles = StyleSheet.create({

});

export default withNavigation(Vocabulary9);

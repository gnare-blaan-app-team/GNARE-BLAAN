import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";

import { withNavigation } from 'react-navigation';

import Home_icon from '../images/Home_icon.png';
import NextStory from './flalokImages/NextStory.png';
import Prayer from './flalokImages/Prayer.png';
import Vocabulary from './flalokImages/Vocabulary.png';
import flalokAfterStory_BG from './flalokImages/flalokAfterStory_BG.png';

import {globalStyleSheet} from '../globalStyleSheet/globalStyleSheet.js';

class EndStoryScreen extends Component {

    static navigationOptions = {
        header:null,
        cardStyle: {backgroundColor: 'transperent'},
    }
    
    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    render() {

        return (
            <ImageBackground style={styles.image} source={flalokAfterStory_BG}>
            
                <View style={styles.container}>
                    <View style={styles.imageTab}>
                        <TouchableOpacity onPress={this.gotoMainMenu}>
                            <Image
                                source={NextStory}
                                style={styles.image}
                            ></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.imageTab}>
                        <TouchableOpacity onPress={this.gotoMainMenu}>
                            <Image
                                source={Prayer}
                                style={styles.image}
                            ></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.imageTab}>
                        <TouchableOpacity onPress={this.gotoMainMenu}>
                            <Image
                                source={Vocabulary}
                                style={styles.image}
                            ></Image>
                        </TouchableOpacity>
                    </View>
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '15%',
        left: '45%',
        width: '40%',
        height: '60%',
    },

    imageTab: {
        width: '90%',
        height: '25%',
        margin: '5%',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
});

export default withNavigation(EndStoryScreen);
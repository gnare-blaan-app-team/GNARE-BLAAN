import React, { Component } from 'react';
import { View, ImageBackground, Text, Image, PanResponder, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './MenuItem';

import {globalStyleSheet as styles} from './globalStyleSheet/globalStyleSheet.js'; 

class Mainmenu extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoLetters = () => {
        this.props.navigation.navigate('letterIntro');
    }

    gotoNumbers = () => {
        this.props.navigation.navigate('numberIntro');
    }

    gotoVocabulary = () => {
        this.props.navigation.navigate('vocabularyMenu');
    }

    gotoFlalok = () => {
       // this.bg.stop();
        this.props.navigation.navigate('flalok');
    }

    gotoMainMenu = () => {
       // this.bg.stop();
        this.props.navigation.navigate('home');
    }

    gotoCultureandArts = () => {
        this.props.navigation.navigate('cultureandarts');
    }

    goBack = () => {
        this.props.navigation.navigate('home');
    }

    gotoGame = () => {
        this.props.navigation.navigate('gameMenu');
    }

    render() {

        StatusBar.setHidden(true);
        return (
            <ImageBackground style={styles.image}
                source={require('./images/BG.jpg')}
            >
                <View style={styles.menuContainer}>
                    <MenuItem itemImage={require('./images/Icon_Letter.png')} goto={this.gotoLetters} />
                    <MenuItem itemImage={require('./images/Icon_Number.png')} goto={this.gotoNumbers}/>
                    <MenuItem itemImage={require('./images/Flalok.png')} goto={this.gotoFlalok} />
                    <MenuItem itemImage={require('./images/Games.png')} goto={this.gotoGame}/>
                    <MenuItem itemImage={require('./images/CultureandArts.png')} goto={this.gotoCultureandArts} />
                    <MenuItem itemImage={require('./images/Vocabulary.png')} goto={this.gotoVocabulary}/>
                </View>

                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={require('./images/Back_icon.png')}
                            style={styles.back}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={require('./images/Home_icon.png')}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
                </View>


            </ImageBackground>
        )
    }
}

export default withNavigation(Mainmenu);

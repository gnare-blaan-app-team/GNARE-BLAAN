import React, { Component } from 'react';
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './MenuItem';

import {globalStyleSheet as styles} from './globalStyleSheet/globalStyleSheet.js';

class Mainmenu extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoLetters = () => {
        this.props.navigation.navigate('letters');
    }
    gotoNumbers = () => {
        this.props.navigation.navigate('numbers');
    }

    gotoFlalok = () => {
        this.props.navigation.navigate('flalok');
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('home');
    }

    goBack = () => {
        this.props.navigation.navigate('home');
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('./images/BG.jpg')}
            >
                <View style={styles.menuContainer}>
                    <MenuItem itemImage={require('./images/Icon_Letter.png')} goto={this.gotoLetters} />
                    <MenuItem itemImage={require('./images/Icon_Number.png')} goto={this.gotoNumbers}/>
                    <MenuItem itemImage={require('./images/Flalok.png')} goto={this.gotoFlalok} />
                    <MenuItem itemImage={require('./images/Games.png')} />
                    <MenuItem itemImage={require('./images/CultureandArts.png')} />
                    <MenuItem itemImage={require('./images/Vocabulary.png')} />
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
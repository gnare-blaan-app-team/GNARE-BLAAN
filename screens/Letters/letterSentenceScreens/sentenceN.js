import React, { Component } from 'react';
import { View, Image, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet';

Sound.setCategory('Playback');

class SentenceN extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.letter_sentence_n = new Sound('sentence_letter_n.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
    }

    playAsound_2 = () => {
        this.letter_sentence_n.play();
    }

    handleBackPress = () => {
        this.letter_sentence_n.pause();
    }

    goBack = () => {
        this.letter_sentence_n.pause();
        const { goBack } = this.props.navigation;
        goBack();
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../lettersImage/sentenceN.png')}
            >
                <View style={styles.A_Speaker_Container_2}>
                    <TouchableOpacity onPress={this.playAsound_2}>
                        <Image
                            source={require('../../images/Speaker_icon.png')}
                            style={styles.A_Speaker_2}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={require('../../images/Back_icon.png')}
                            style={styles.back}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={require('../../images/Home_icon.png')}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(SentenceN);
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

Sound.setCategory('Playback');

class SentenceY extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.letter_sentence_y = new Sound('sentence_letter_y.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
    }

    playAsound_2 = () => {
        this.letter_sentence_y.play();
    }

    handleBackPress = () => {
        this.letter_sentence_y.pause();
    }

    goBack = () => {
        this.letter_sentence_y.pause();
        const { goBack } = this.props.navigation;
        goBack();
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../lettersImage/sentenceY.png')}
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
const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent:'center',
        alignItems:'center',
    },
    main: {
        width: '100%',
        height: '100%',
    },
    A_Speaker_Container_2: {
        position: 'absolute',
        left: '80%',
        top: '27%',
    },
    A_Speaker_2: {
        height: 35,
        width: 35
    },
    backContainer: {
        position: 'absolute',
        left: '1%',
        top: '-2%',
    },
    back: {
        width: wp('14%'),
        height: hp('28%')
    },

    homeContainer: {
        position: 'absolute',
        left: '85%',
        top: '-2%',
    },
    home: {
        width: wp('14%'),
        height: hp('28%')
    },
})

export default withNavigation(SentenceY);
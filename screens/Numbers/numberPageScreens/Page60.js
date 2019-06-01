import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Page60 extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.number60 = new Sound('number_60.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
        this.mute = new Sound('mute.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
    }


    handleBackPress = () => {
        this.number60.pause();
    }

    playAsound_2 = () => {
        this.number60.play();
    }
    gotoSentence60 = () => {
        this.props.navigation.navigate('sentence60');
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../../images/BG.jpg')}
            >
                <View style={styles.black}>
                </View>
                <Image
                    style={styles.main}
                    source={require('../numbersImage/60(1).png')}
                ></Image>
                <View style={styles.A_Speaker_Container_2}>
                    <TouchableOpacity onPress={this.playAsound_2}>
                        <Image
                            source={require('../numbersImage/Speaker_icon.png')}
                            style={styles.A_Speaker_2}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentence60}>
                        <Image
                            source={require('../numbersImage/Letters_Info_Icon.png')}
                            style={styles.sentenceIcon}
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
    },
    black: {
        top: '24%',
        left: '15%',
        width: '35%',
        height: '61%',
        backgroundColor: 'black',
        opacity: 0.2,
    },
    pencil: {
        width: '30%',
        height: '6%',
        bottom: '22%',
        left: '51%'
    },
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
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
    sentenceIconContainer: {
        position: 'absolute',
        left: '85%',
        top: '80%',
    },
    sentenceIcon: {
        width: wp('9%'),
        height: hp('16%')
    }
})

export default withNavigation(Page60);
import React, { Component } from 'react';
import { BackHandler,View, ImageBackground, Text, Image, PanResponder, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './MenuItem';
import Sound from 'react-native-sound';

import {sound} from './HomePage';

import {globalStyleSheet as styles} from './globalStyleSheet/globalStyleSheet.js'; 
Sound.setCategory('Playback');

class Mainmenu extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(){
        super();
        // this.backHandler = null;
    }

    componentDidMount() {
        try {
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {

        }
        // if (this.backHandler == null) {
        //     this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress); 
        //     // alert('test');
        // }
    }

    // handleBackPress = () => {
    //     return true;
    // }

    gotoLetters = () => {
        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        this.props.navigation.push('letterIntro');
    }

    gotoNumbers = () => {
        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        this.props.navigation.push('numberIntro');
    }

    gotoVocabulary = () => {
        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        
        this.props.navigation.push('vocabularyMenu');
    }

    gotoFlalok = () => {
        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
       // this.bg.stop();
        this.props.navigation.push('flalok');
    }

    gotoMainMenu = () => {
       // this.bg.stop();
       try {
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {

        }
        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        // BackHandler.addEventListener('hardwareBackPress', this.handleHomeBackPress);
        this.props.navigation.navigate('home');
    }

    gotoCultureandArts = () => {
        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        this.props.navigation.push('cultureandarts');
    }

    goBack = () => {
        this.props.navigation.navigate('home');
        // this.backHandler.remove();
        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        // BackHandler.addEventListener('hardwareBackPress', this.handleHomeBackPress);
    }

    // handleHomeBackPress = () => {
    //     sound.stop();
    //     BackHandler.exitApp();
    // }

    gotoGame = () => {
        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        this.props.navigation.push('gameIntro');
    }

    playClickSound = () => {
        if(this.clickSound != null) {
            this.clickSound.release();
        }
        // this.stopSounds();
        this.clickSound = new Sound('click.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            alert('failed to load the sound', error);
            return;
        } else {
            this.clickSound.play();
        }});
    }

    releaseSounds = ()=> {
        if(this.clickSound != null) {
            this.clickSound.release();
        }
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

                {/* <View style={{position: 'absolute', width: '70%', height: '30%', top: '65%',
                            left: '15%'}}>
                    <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('./sampleSentence.gif')}></Image>
                </View> */}

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

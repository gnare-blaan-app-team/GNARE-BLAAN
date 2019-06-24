

import React, { Component } from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './NumbersMenu';

import Sound from 'react-native-sound';

import { numberBGList, sentenceNumberBGList, soundList,
        numberGlowList } from './numbersImport';
  
import GoBackIcon from '../images/Back_icon.png';
import HomeIcon from '../images/Home_icon.png';

import Glow_A from '../Letters/lettersGlow/Glow_A.png';

    // Letter Components Imports
import SentenceIcon from '../images/Letters_Info_Icon.png';
import SpeakerIcon from '../images/Speaker_icon.png';
import PencilIcon from '../images/Pencil_icon.png';
import NextIcon from '../images/Next_Icon.png';
import PrevIcon from '../images/Prev_Icon.png';

    // Letter Main Background Import
import imageMainBG from '../images/BG.jpg';

    // Letter Background Imports

import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';

    // Hiding Components
const hideLeft = '-1000%';
const hideRight = '1000%';
const showPrev ='5%';
const showNext = '85%';
const showPencil = '22%';
const showGlow = '21%';
const showSpeaker = '25%';
const showSentence = '80%';
const showSentenceObject = '20%';

Sound.setCategory('Playback');


class NumberScreen extends Component {
    static navigationOptions = {
        header: null,
    }


        // Component State
    constructor() {
        super();

        this.state = {

            //Background State
            imageBackground: imageMainBG,

            //Letter Menu State
            menuLetterHide: '22%',

            //Letter State
            prevHide: hideLeft,
            nextHide: hideRight,
            pencilHide: hideLeft,
            glowHide: hideLeft,
            speakerHide: hideLeft,
            speaker2Hide: hideLeft,
            sentenceHide: hideRight,
            sentenceObjectHide: hideLeft,
            indexSound: 0,

            glow: Glow_A,
            hideLetterBG: '0%',
            prevBG: imageMainBG,
        },

        // Sound State
        this.numberSound = null;
        this.sentenceNumberSound = null;
        this.objectGlow = null;
        this.timeoutSound = null;
    }

    changeBackground = (imageBG, soundPlay) => {
        this.stopAutoPlaySound();
        this.setState({menuLetterHide: imageBG == imageMainBG ? '22%' : '-1000%', 
                        prevHide: imageBG == numberBGList[0] ? hideLeft : showPrev,
                        imageBackground: imageBG,
                        nextHide: imageBG == imageMainBG ? hideRight : showNext,
                        glowHide: imageBG == imageMainBG ? hideLeft : showGlow,
                        speakerHide: imageBG == imageMainBG ? hideLeft : showSpeaker,
                        sentenceHide: imageBG == imageMainBG ? hideRight : showSentence,
                        pencilHide: imageBG == imageMainBG ? hideLeft : showPencil,
                        indexSound: soundPlay, });
        this.autoPlaySound();
    }

    autoPlaySound = () => {
        this.releaseSounds();
        this.objectGlow = setTimeout(()=> {
            this.playNumberSound();
        }, 200);
    }

    stopAutoPlaySound = () => {
        if(this.objectGlow != null) {
            this.stopSounds();
            clearTimeout(this.objectGlow);
        }
    }

    sentencePage = () => {
        const letterIndex = this.state.indexSound;
        this.stopAutoPlaySound();
        this.setState({menuLetterHide: '-1000%', 
                        imageBackground: sentenceNumberBGList[letterIndex], 
                        prevHide: hideLeft, nextHide: hideRight,
                        glowHide: hideLeft, speakerHide: hideLeft,
                        speaker2Hide: showSpeaker, sentenceHide: hideRight,
                        sentenceObjectHide: showSentenceObject,
                        pencilHide: hideLeft, prevBG: sentenceNumberBGList[letterIndex]});
        this.timeoutSound = setTimeout(()=>{
            this.playSentenceSound();
        }, 500);
    }

    handleBackPress = () => {
        if(this.timeoutSound != null) {
            clearTimeout(this.timeoutSound);
        }
        this.stopAutoPlaySound();
        this.releaseSounds();
        this.numberSound = null;
        this.sentenceNumberSound = null;
    }

    playNumberSound = () => {
        this.stopAutoPlaySound();
        this.numberSound = new Sound('number_' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                alert('failed to load the sound', error);
                return;
            } else {
                this.numberSound.play();
                this.setState({glow: Glow_A});
                this.setState({glow: numberGlowList[this.state.indexSound]});
            }});   
    }


    playSentenceSound = () => {
        this.stopAutoPlaySound();
        this.sentenceNumberSound = new Sound('numbersentence' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                alert('failed to load the sound', error);
                return;
            } else {
                this.sentenceNumberSound.play();
                this.setState({glow: Glow_A});
                this.setState({glow: numberGlowList[this.state.indexSound]});
            }});   
    }

    letterTracing = () => {
        this.handleBackPress();
        this.props.navigation.push('tracing' + soundList[this.state.indexSound]);
    }


    gotoMainMenu = () => {
        this.handleBackPress();
        this.props.navigation.navigate('mainMenu');
    }

    goNext = () => {
        let letterNum = this.state.indexSound;
        let nextPage = letterNum + 1;
        let nextBG = numberBGList[nextPage];
        this.stopAutoPlaySound();

        if(nextPage < 24) {
            this.changeBackground(nextBG, nextPage);
        } else {
            this.changeBackground(numberBGList[0], 0);
        }
    }

    releaseSounds = () => {
        if(this.numberSound != null) {
            this.numberSound.release();
        }
        if(this.sentenceNumberSound != null) {
            this.sentenceNumberSound.release();
        }
    }

    stopSounds = () => {
        if(this.numberSound != null) {
            this.numberSound.setVolume(0.2);
            this.numberSound.pause();
        }
        if(this.sentenceNumberSound != null) {
            this.sentenceNumberSound.setVolume(0.2);
            this.sentenceNumberSound.pause();
        }
    }

    goPrev = () => {
        const letterNum = this.state.indexSound;
        const prevPage = letterNum - 1;
        this.stopAutoPlaySound();
        const prevBG = numberBGList[prevPage];
        this.setState({prevSound: letterNum});

        if(prevPage > 0) {
            this.changeBackground(prevBG, prevPage);
        } else {
            this.changeBackground(numberBGList[0], 0);
        }
    }

    goBack = () => {
        if(this.state.prevBG == sentenceNumberBGList[this.state.indexSound]) {
            if(this.timeoutSound != null) {
                clearTimeout(this.timeoutSound);
            }
            this.stopAutoPlaySound();
            this.setState({menuLetterHide: '-1000%', 
                    imageBackground: numberBGList[this.state.indexSound],
                    prevHide: numberBGList[this.state.indexSound] == numberBGList[0] ? hideLeft : showPrev,
                    pencilHide: showPencil,
                    glowHide: showGlow,
                    speakerHide: showSpeaker,
                    sentenceHide: showSentence,
                    nextHide: showNext,
                    sentenceObjectHide: hideLeft,
                    speaker2Hide: hideLeft, prevBG: numberBGList[this.state.indexSound]});
        } else {
            if(this.state.imageBackground == imageMainBG) {
                this.handleBackPress();
                this.props.navigation.navigate('mainMenu');
            } else {
                this.stopAutoPlaySound();
                this.setState({menuLetterHide: '22%', imageBackground: imageMainBG,
                            prevHide: hideLeft,
                            pencilHide: hideLeft,
                            glowHide: hideLeft,
                            speakerHide: hideLeft,
                            sentenceHide: hideRight,
                            nextHide: hideRight,
                            speaker2Hide: hideLeft});
                }
            }
        }

    render() {
        return (

            <ImageBackground source={imageMainBG} style={{flex: 1, width: '100%', height: '100%', resizeMode: 'stretch'}}>
                <View style={{position: 'absolute', top: '0%', width: '100%', height: '100%'}}>
                    <Image source={imageMainBG} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', top: this.state.hideLetterBG, width: '100%', height: '100%'}}>
                    <Image source={this.state.imageBackground} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                </View>

                {/* Start of Page Letters Code Part */}
                {/* Sentence Button */}
               <View style={{position: 'absolute', left: '82%', top: this.state.sentenceHide, width: '14%', height: '28%',}} >
                    <TouchableOpacity onPress={this.sentencePage}>
                        <Image
                            source={SentenceIcon}
                            style={styles.sentenceIcon}
                        ></Image>
                    </TouchableOpacity>
                </View>

                {/* Speaker 2 Container */}
                <View style={{position: 'absolute', left: '80%', top: this.state.speakerHide, width: '6%', height: '10%',}} >
                    <TouchableOpacity onPress={this.playNumberSound}>
                        <Image
                            source={SpeakerIcon}
                            style={styles.containImage}
                        ></Image>

                    </TouchableOpacity>
                </View>

                {/* Speaker Sentence 2 Container */}
                <View style={{position: 'absolute', left: '80%', top: this.state.speaker2Hide, width: '6%', height: '10%',}} >
                    <TouchableOpacity onPress={this.playSentenceSound}>
                        <Image
                            source={SpeakerIcon}
                            style={styles.containImage}
                        ></Image>

                    </TouchableOpacity>
                </View>

                {/* Number Glow Container */}
                <View style={{position: 'absolute', left: '51%', top: this.state.glowHide, width: '30%', height: '45%',}} >
                    <Image style={styles.Glow} source={this.state.glow}/>
                </View>

                {/* Pencil Button */}
                <View style={{position: 'absolute', left: '11%', 
                    top: this.state.pencilHide, width: '7%', height: '22%',}} >
                    <TouchableOpacity onPress={this.letterTracing}>
                        <Image
                        source={PencilIcon}
                            style={styles.containImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                 {/* Prev Button */}
                <View style={{position: 'absolute', left: this.state.prevHide, 
                            top: '46%', width: '12%', height: '24%',}}>
                    <TouchableOpacity onPress={this.goPrev}>
                        <Image
                            source={PrevIcon}
                            style={styles.prev}
                        ></Image>
                    </TouchableOpacity>
                </View>

                {/* Next Button */}
                <View style={{position: 'absolute', left: this.state.nextHide, 
                            top: '46%', width: '12%', height: '24%',}} >
                    <TouchableOpacity onPress={this.goNext}>
                        <Image
                            source={NextIcon}
                            style={styles.next}
                        ></Image>
                    </TouchableOpacity>
                </View>
                {/* End of Page Letters Code Part */}


                {/* Sentence Number Obejct Glow */}
                <View style={{position: 'absolute', left: '37%', top: this.state.sentenceObjectHide, width: '25%', height: '35%',}} >
                    <Image style={styles.Glow} source={this.state.glow}/>
                </View>



                {/* Start of Letters Enum Code Part */}
                <View style={{position: 'absolute', top: this.state.menuLetterHide, left: '15%', width: '83%', height: '32%', flexDirection: 'row', flexWrap: 'wrap',}}>
                    <MenuItem itemImage={require('./numbersImage/1.png')} goto={() => {
                                        this.changeBackground(numberBGList[0], 0)}} />
                    <MenuItem itemImage={require('./numbersImage/2.png')} goto={() => {
                                        this.changeBackground(numberBGList[1], 1)}} />
                    <MenuItem itemImage={require('./numbersImage/3.png')} goto={() => {
                                        this.changeBackground(numberBGList[2], 2)}} />
                    <MenuItem itemImage={require('./numbersImage/4.png')} goto={() => {
                                        this.changeBackground(numberBGList[3], 3)}} />
                    <MenuItem itemImage={require('./numbersImage/5.png')} goto={() => {
                                        this.changeBackground(numberBGList[4], 4)}} />
                    <MenuItem itemImage={require('./numbersImage/6.png')} goto={() => {
                                        this.changeBackground(numberBGList[5], 5)}} />
                    <MenuItem itemImage={require('./numbersImage/7.png')} goto={() => {
                                        this.changeBackground(numberBGList[6], 6)}} />
                    <MenuItem itemImage={require('./numbersImage/8.png')} goto={() => {
                                        this.changeBackground(numberBGList[7], 7)}} />
                    <MenuItem itemImage={require('./numbersImage/9(1).png')} goto={() => {
                                        this.changeBackground(numberBGList[8], 8)}} />
                    <MenuItem itemImage={require('./numbersImage/10.png')} goto={() => {
                                        this.changeBackground(numberBGList[9], 9)}} />
                    <MenuItem itemImage={require('./numbersImage/20(2).png')} goto={() => {
                                        this.changeBackground(numberBGList[10], 10)}} />
                    <MenuItem itemImage={require('./numbersImage/30.png')} goto={() => {
                                        this.changeBackground(numberBGList[12], 11)}} />
                    <MenuItem itemImage={require('./numbersImage/40.png')} goto={() => {
                                        this.changeBackground(numberBGList[12], 12)}} />
                    <MenuItem itemImage={require('./numbersImage/50.png')} goto={() => {
                                        this.changeBackground(numberBGList[13], 13)}} />
                    <MenuItem itemImage={require('./numbersImage/60.png')} goto={() => {
                                        this.changeBackground(numberBGList[14], 14)}} />
                    <MenuItem itemImage={require('./numbersImage/70.png')} goto={() => {
                                        this.changeBackground(numberBGList[15], 15)}} />
                    <MenuItem itemImage={require('./numbersImage/80.png')} goto={() => {
                                        this.changeBackground(numberBGList[16], 16)}} />
                    <MenuItem itemImage={require('./numbersImage/90.png')} goto={() => {
                                        this.changeBackground(numberBGList[17], 17)}} />
                    <MenuItem itemImage={require('./numbersImage/100.png')} goto={() => {
                                        this.changeBackground(numberBGList[18], 18)}} />
                    <MenuItem itemImage={require('./numbersImage/200.png')} goto={() => {
                                        this.changeBackground(numberBGList[19], 19)}} />
                    <MenuItem itemImage={require('./numbersImage/300.png')} goto={() => {
                                        this.changeBackground(numberBGList[20], 20)}} />
                    <MenuItem itemImage={require('./numbersImage/400.png')} goto={() => {
                                        this.changeBackground(numberBGList[21], 21)}} />
                    <MenuItem itemImage={require('./numbersImage/500.png')} goto={() => {
                                        this.changeBackground(numberBGList[22], 22)}} />
                    <MenuItem itemImage={require('./numbersImage/1000.png')} goto={() => {
                                        this.changeBackground(numberBGList[23], 23)}} />
                </View>
                {/* End of Letters Enum Code Part */}


                <View style={{position: 'absolute',
                                left: '1%',
                                top: '3%',
                                width: '14%',
                                height: '28%'}}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image source={GoBackIcon} style={styles.back}></Image>
                    </TouchableOpacity>
                </View>

                <View style={{position: 'absolute',
                                left: '88%',
                                top: '3%',
                                width: '14%',
                                height: '28%',}}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={HomeIcon} style={styles.home}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(NumberScreen);

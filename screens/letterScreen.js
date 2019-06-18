import React, { Component } from 'react';
import { View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './LettersMenu';

import Sound from 'react-native-sound';

import GoBackIcon from './images/Back_icon.png';
import HomeIcon from './images/Home_icon.png';
import GlowA from './lettersGlow/GlowA.gif';
import Glow_A from './lettersGlow/Glow_A.png';

    // Letter Components Imports
import SentenceIcon from './images/Letters_Info_Icon.png';
import SpeakerIcon from './images/Speaker_icon.png';
import PencilIcon from './images/Pencil_icon.png';
import NextIcon from './images/Next_Icon.png';
import PrevIcon from './images/Prev_Icon.png';

    // Letter Main Background Import
import imageMainBG from './images/BG.jpg';

    // Letter Background Imports
import LetterA from './lettersImage/LetterA.png';
import LetterB from './lettersImage/LetterB.png';
import LetterD from './lettersImage/LetterD.png';
import LetterE from './lettersImage/LetterE.png';
import LetterF from './lettersImage/LetterF.png';
import LetterG from './lettersImage/LetterG.png';
import LetterH from './lettersImage/LetterH.png';
import LetterI from './lettersImage/LetterI.png';
import LetterK from './lettersImage/LetterK.png';
import LetterL from './lettersImage/LetterL.png';
import LetterM from './lettersImage/LetterM.png';
import LetterN from './lettersImage/LetterN.png';
import LetterO from './lettersImage/LetterO.png';
import LetterS from './lettersImage/LetterS.png';
import LetterT from './lettersImage/LetterT.png';
import LetterU from './lettersImage/LetterU.png';
import LetterW from './lettersImage/LetterW.png';
import LetterY from './lettersImage/LetterY.png';


    // Sentence Background Imports
import sentenceA from './lettersImage/sentenceA.png';
import sentenceB from './lettersImage/sentenceB.png';
import sentenceD from './lettersImage/sentenceD.png';
import sentenceE from './lettersImage/sentenceE.png';
import sentenceF from './lettersImage/sentenceF.png';
import sentenceG from './lettersImage/sentenceG.png';
import sentenceH from './lettersImage/sentenceH.png';
import sentenceI from './lettersImage/sentenceI.png';
import sentenceK from './lettersImage/sentenceK.png';
import sentenceL from './lettersImage/sentenceL.png';
import sentenceM from './lettersImage/sentenceM.png';
import sentenceN from './lettersImage/sentenceN.png';
import sentenceO from './lettersImage/sentenceO.png';
import sentenceS from './lettersImage/sentenceS.png';
import sentenceT from './lettersImage/sentenceT.png';
import sentenceU from './lettersImage/sentenceU.png';
import sentenceW from './lettersImage/sentenceW.png';
import sentenceY from './lettersImage/sentenceY.png';

import {globalStyleSheet as styles} from './globalStyleSheet/globalStyleSheet.js';

    // Hiding Components
const hideLeft = '-1000%';
const hideRight = '1000%';
const showPrev ='5%';
const showNext = '83%';
const showPencil = '18%';
const showGlow = '20%';
const showSpeaker = '25%';
const showSentence = '73%';

Sound.setCategory('Playback');

    // Letter Sound List
const soundList = ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 's', 't',
                    'u', 'w', 'y',];

    // Letter Background List
const letterBGList = [LetterA, LetterB, LetterD, LetterE, LetterF, LetterG, LetterH, LetterI, LetterK, LetterL, LetterM, LetterN,
    LetterO, LetterS, LetterT, LetterU, LetterW, LetterY];

    // Sentence Background List
const sentenceBGList = [sentenceA, sentenceB, sentenceD, sentenceE, sentenceF, sentenceG, sentenceH, sentenceI, sentenceK, sentenceL, sentenceM, sentenceN,
    sentenceO, sentenceS, sentenceT, sentenceU, sentenceW, sentenceY];

    // Word GLow List
const glowGIFList = [GlowA];
const glowPicList = [Glow_A];


class Letters extends Component {
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
            indexSound: 0,

            glow: Glow_A,
            hideLetterBG: '0%',
            prevBG: imageMainBG,
        },

        // Sounds
        this.letterSound = null;
        this.wordSound = null;
        this.sentenceSound = null;
        this.objectGlow = null;
        this.glow1 = null;
        this.bgSound = null;

        this.timeoutSound = null;
    }

    changeBackground = (imageBG, soundPlay) => {
        this.stopAutoPlaySound();
        this.setState({menuLetterHide: imageBG == imageMainBG ? '22%' : '-1000%', 
                        prevHide: imageBG == LetterA ? hideLeft : showPrev,
                        imageBackground: imageBG,
                        nextHide: imageBG == imageMainBG ? hideRight : showNext,
                        glowHide: imageBG == imageMainBG ? hideLeft : showGlow,
                        speakerHide: imageBG == imageMainBG ? hideLeft : showSpeaker,
                        sentenceHide: imageBG == imageMainBG ? hideRight : showSentence,
                        pencilHide: imageBG == imageMainBG ? hideLeft : showPencil,
                        indexSound: soundPlay,
                        });
        this.autoPlaySound();
    }

    autoPlaySound = () => {
        this.releaseSounds();
        this.objectGlow = setTimeout(()=> {
            this.letterSound = new Sound('letter_play_' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.letterSound.play();
                }});   
        }, 200);
        
        this.glow1 = setTimeout(() => {
            this.wordSound = new Sound('word_play_' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.wordSound.play();
                }});
                this.setState({glow: Glow_A});
                this.setState({glow: GlowA});
        }, 5000);
    }

    stopAutoPlaySound = () => {
        if(this.objectGlow != null && this.glow1 != null) {
            this.stopSounds();
//            this.setState({glow: Glow_A});
            clearTimeout(this.glow1);
            clearTimeout(this.objectGlow);
        }
    }

    sentencePage = () => {
        const letterIndex = this.state.indexSound;
        this.stopAutoPlaySound();
        this.setState({menuLetterHide: '-1000%', 
                        imageBackground: sentenceBGList[letterIndex], 
                        prevHide: hideLeft, nextHide: hideRight,
                        glowHide: hideLeft, speakerHide: hideLeft,
                        speaker2Hide: showSpeaker, sentenceHide: hideRight,
                        pencilHide: hideLeft, prevBG: sentenceBGList[letterIndex]});
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
        this.letterSound = null;
        this.wordSound = null;
        this.sentenceSound = null;
    }

    releaseSounds = ()=> {
        if(this.letterSound != null) {
            this.letterSound.release();
        }
        if(this.wordSound != null) {
            this.wordSound.release();
        }
        if(this.sentenceSound != null) {
            this.sentenceSound.release();
        }
    }

    playLetterSound = () => {
        if(this.letterSound != null) {
            this.letterSound.release();
        }
        this.stopAutoPlaySound();
        this.letterSound = new Sound('letter_play_' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                alert('failed to load the sound', error);
                return;
            } else {
                this.letterSound.play();
            }});
    }

    playSentenceSound = () => {
        if(this.sentenceSound != null) {
            this.sentenceSound.release();
        }
        if(this.timeoutSound != null) {
            clearTimeout(this.timeoutSound);
        }
        this.stopAutoPlaySound();
        this.sentenceSound = new Sound('sentence_letter_' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                alert('failed to load the sound', error);
                return;
            } else {
                this.sentenceSound.play();
            }});
    }

    playWordSound = () => {
        if(this.wordSound != null) {
            this.wordSound.release();
        }
        this.stopAutoPlaySound();
        this.wordSound = new Sound('word_play_' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                alert('failed to load the sound', error);
                return;
            } else {
                this.wordSound.play();
                this.setState({glow: Glow_A});
                this.setState({glow: GlowA});
            }});
    }

    letterTracing = () => {
        this.handleBackPress();
        const upperCase = soundList[this.state.indexSound].toUpperCase();
        this.props.navigation.navigate('tracing' + upperCase);
    }

    gotoMainMenu = () => {
        this.handleBackPress();
        this.props.navigation.navigate('mainMenu');
    }

    goNext = () => {
        const letterNum = this.state.indexSound;
        const nextPage = letterNum + 1;
        const nextBG = letterBGList[nextPage];
        this.stopAutoPlaySound();
        if(nextPage <= 17) {
            this.changeBackground(nextBG, nextPage);
        } else {
            this.changeBackground(LetterA, 0);
        }
    }

    stopSounds = () => {
        if(this.letterSound != null) {
            this.letterSound.setVolume(0.2);
            this.letterSound.pause();
        }
        if(this.wordSound != null) {
            this.wordSound.setVolume(0.2);
            this.wordSound.pause();
        }
        if(this.sentenceSound != null) {
            this.sentenceSound.setVolume(0.2);
            this.sentenceSound.pause();
        }
        if(this.timeoutSound != null) {
            clearTimeout(this.timeoutSound);
        }
    }
    
    goPrev = () => {
        const letterNum = this.state.indexSound;
        const prevPage = letterNum - 1;
        this.stopAutoPlaySound();
        const prevBG = letterBGList[prevPage];

        if(prevPage > 0) {
            this.changeBackground(prevBG, prevPage);
        } else {
            this.changeBackground(LetterA, 0);
        }
    }

    goBack = () => {
        if(this.state.prevBG == sentenceBGList[this.state.indexSound]) {
            this.stopAutoPlaySound();
            if(this.timeoutSound != null) {
                clearTimeout(this.timeoutSound);
            }
            this.setState({menuLetterHide: '-1000%', 
                    imageBackground: letterBGList[this.state.indexSound],
                    prevHide: letterBGList[this.state.indexSound] == LetterA ? hideLeft : showPrev,
                    pencilHide: showPencil,
                    glowHide: showGlow,
                    speakerHide: showSpeaker,
                    sentenceHide: showSentence,
                    nextHide: showNext,
                    speaker2Hide: hideLeft, prevBG: letterBGList[this.state.indexSound]});
                
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

                <View style={{position: 'absolute', top: this.state.hideLetterBG, width: '100%', height: '100%'}}>
                    <Image source={this.state.imageBackground} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                </View>

                {/* Start of Page Letters Code Part */}
                {/* Sentence Button */}
               <View style={{position: 'absolute', left: '80%', top: this.state.sentenceHide, width: '14%', height: '28%',}} >
                    <TouchableOpacity onPress={this.sentencePage}>
                        <Image
                            source={SentenceIcon}
                            style={styles.sentenceIcon}
                        ></Image>
                    </TouchableOpacity>
                </View>

                {/* Speaker 1 Container */}
                <View style={{position: 'absolute', left: '42%', top: this.state.speakerHide, width: '6%', height: '10%',}} >
                    <TouchableOpacity onPress={this.playLetterSound}>
                        <Image
                            source={SpeakerIcon}
                            style={styles.containImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                {/* Speaker 2 Container */}
                <View style={{position: 'absolute', left: '80%', top: this.state.speakerHide, width: '6%', height: '10%',}} >
                    <TouchableOpacity onPress={this.playWordSound}>
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

                {/* Video Container */}
                <View style={{position: 'absolute', left: '55%', /* borderWidth: 3, borderColor: 'red', */ top: this.state.glowHide, width: '20%', height: '40%',}} >
                    <Image style={styles.Glow} source={this.state.glow}/>
                </View>

                {/* Pencil Button */}
                <View style={{position: 'absolute', left: '10%', top: this.state.pencilHide, width: '9%', height: '24%',}} >
                    <TouchableOpacity onPress={this.letterTracing}>
                        <Image
                        source={PencilIcon}
                            style={styles.containImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                    
                 {/* Prev Button */}
                <View style={{position: 'absolute', left: this.state.prevHide, top: '40%', width: '12%', height: '24%',}}>
                    <TouchableOpacity onPress={this.goPrev}>
                        <Image
                            source={PrevIcon}
                            style={styles.prev}
                        ></Image>
                    </TouchableOpacity>
                </View>

                {/* Next Button */}
                <View style={{position: 'absolute', left: this.state.nextHide, top: '40%', width: '12%', height: '24%',}} >
                    <TouchableOpacity onPress={this.goNext}>
                        <Image
                            source={NextIcon}
                            style={styles.next}
                        ></Image>
                    </TouchableOpacity>
                </View>
                {/* End of Page Letters Code Part */}


                
                {/* Start of Letters Enum Code Part */}
                <View style={{position: 'absolute', top: this.state.menuLetterHide, left: '15%', width: '80%', height: '60%', flexDirection: 'row', flexWrap: 'wrap',}}>
                    <MenuItem itemImage={require('./lettersImage/a.png')} goto={() => {
                                        this.changeBackground(LetterA, 0)}} />
                    <MenuItem itemImage={require('./lettersImage/b.png')} goto={() => {
                                        this.changeBackground(LetterB, 1)}} />
                    <MenuItem itemImage={require('./lettersImage/d.png')} goto={() => {
                                        this.changeBackground(LetterD, 2)}} />
                    <MenuItem itemImage={require('./lettersImage/e_.png')} goto={() => {
                                        this.changeBackground(LetterE, 3)}} />
                    <MenuItem itemImage={require('./lettersImage/f.png')} goto={() => {
                                        this.changeBackground(LetterF, 4)}} />
                    <MenuItem itemImage={require('./lettersImage/g.png')} goto={() => {
                                        this.changeBackground(LetterG, 5)}} />
                    <MenuItem itemImage={require('./lettersImage/h.png')} goto={() => {
                                        this.changeBackground(LetterH, 6)}} />
                    <MenuItem itemImage={require('./lettersImage/i.png')} goto={() => {
                                        this.changeBackground(LetterI, 7)}} />
                    <MenuItem itemImage={require('./lettersImage/k.png')} goto={() => {
                                        this.changeBackground(LetterK, 8)}} />
                    <MenuItem itemImage={require('./lettersImage/l.png')} goto={() => {
                                        this.changeBackground(LetterL, 9)}} />
                    <MenuItem itemImage={require('./lettersImage/m.png')} goto={() => {
                                        this.changeBackground(LetterM, 10)}} />
                    <MenuItem itemImage={require('./lettersImage/n.png')} goto={() => {
                                        this.changeBackground(LetterN, 11)}} />
                    <MenuItem itemImage={require('./lettersImage/o.png')} goto={() => {
                                        this.changeBackground(LetterO, 12)}} />
                    <MenuItem itemImage={require('./lettersImage/s.png')} goto={() => {
                                        this.changeBackground(LetterS, 13)}} />
                    <MenuItem itemImage={require('./lettersImage/t.png')} goto={() => {
                                        this.changeBackground(LetterT, 14)}} />
                    <MenuItem itemImage={require('./lettersImage/u.png')} goto={() => {
                                        this.changeBackground(LetterU, 15)}} />
                    <MenuItem itemImage={require('./lettersImage/w.png')} goto={() => {
                                        this.changeBackground(LetterW, 16)}} />
                    <MenuItem itemImage={require('./lettersImage/y.png')} goto={() => {
                                        this.changeBackground(LetterY, 17)}} />
                </View>
                {/* End of Letters Enum Code Part */}


                <View style={{position: 'absolute',
                                left: '2%',
                                top: '3%',
                                width: '14%',
                                height: '28%'}}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image source={GoBackIcon} style={styles.back}></Image>
                    </TouchableOpacity>
                </View>

                <View style={{position: 'absolute',
                                left: '86%',
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

export default withNavigation(Letters);
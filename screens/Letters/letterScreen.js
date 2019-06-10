import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './LettersMenu';

import Sound from 'react-native-sound';

import GoBackIcon from '../images/Back_icon.png';
import HomeIcon from '../images/Home_icon.png';
import Video from 'react-native-video';
import GlowA from './lettersGlow/GlowA.gif';
import Glow_A from './lettersGlow/GlowA.png';

import SentenceIcon from '../images/Letters_Info_Icon.png';
import SpeakerIcon from '../images/Speaker_icon.png';
import PencilIcon from '../images/Pencil_icon.png';
import NextIcon from '../images/Next_Icon.png';
import PrevIcon from '../images/Prev_Icon.png';

import imageMainBG from '../images/BG.jpg';
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

import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';

const hideLeft = '-1000%';
const hideRight = '1000%';
const showPrev ='5%';
const showNext = '83%';
const showPencil = '18%';
const showGlow = '20%';
const showSpeaker = '20%';
const showSentence = '73%';

Sound.setCategory('Playback');
const soundList = ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 's', 't',
                    'u', 'w', 'y',];

const letterBGList = [LetterA, LetterB, LetterD, LetterE, LetterF, LetterG, LetterH, LetterI, LetterK, LetterL, LetterM, LetterN,
    LetterO, LetterS, LetterT, LetterU, LetterW, LetterY];

const sentenceBGList = [sentenceA, sentenceB, sentenceD, sentenceE, sentenceF, sentenceG, sentenceH, sentenceI,
    sentenceK, sentenceL, sentenceM, sentenceN, sentenceO, sentenceS, sentenceT, sentenceU, sentenceW, sentenceY];

const glowGIFList = [GlowA];
const glowPicList = [Glow_A];

class Letters extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor() {
        super();
        
        this.state = {
            imageBackground: imageMainBG,
            menuLetterHide: '20%',
            prevHide: hideLeft,
            nextHide: hideRight,
            pencilHide: hideLeft,
            glowHide: hideLeft,
            speakerHide: hideLeft,
            speaker2Hide: hideLeft,
            sentenceHide: hideRight,
            letterPlay: 0,
            wordPlay: 0,
            glow: Glow_A,
            prevBG: imageMainBG,
        },

        this.soundLetterArray = new Array(18);
        this.soundWordArray = new Array(18);
        this.soundSentenceArray = new Array(18);
        for(i = 0; i < 18; i++) {
            this.soundLetterArray[i] = new Sound('letter_play_' + soundList[i] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                    return;
                }
                BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
            });
            this.soundWordArray[i] = new Sound('word_play_' + soundList[i] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                }
                BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
            });
            this.soundSentenceArray[i] = new Sound('sentence_letter_' + soundList[i] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                }
                BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
            });
        }
        this.mute = new Sound('mute.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
    }

    changeBackground = (imageBG, soundPlay) => {
        this.setState({menuLetterHide: imageBG == imageMainBG ? '20%' : '-1000%', 
                        imageBackground: imageBG, 
                        prevHide: imageBG == LetterA ? hideLeft : showPrev,
                        nextHide: imageBG == imageMainBG ? hideRight : showNext,
                        glowHide: imageBG == imageMainBG ? hideLeft : showGlow,
                        speakerHide: imageBG == imageMainBG ? hideLeft : showSpeaker,
                        sentenceHide: imageBG == imageMainBG ? hideRight : showSentence,
                        pencilHide: imageBG == imageMainBG ? hideLeft : showPencil,
                        letterPlay: soundPlay, wordPlay: soundPlay});
    }

    sentencePage = () => {
        const letterIndex = this.state.letterPlay;
        this.handleBackPress();

        this.setState({menuLetterHide: '-1000%', 
                        imageBackground: sentenceBGList[letterIndex], 
                        prevHide: hideLeft, nextHide: hideRight,
                        glowHide: hideLeft, speakerHide: hideLeft,
                        speaker2Hide: showSpeaker, sentenceHide: hideRight,
                        pencilHide: hideLeft, prevBG: sentenceBGList[letterIndex]});
    }

    
    handleBackPress = () => {
        this.soundLetterArray[this.state.letterPlay].stop();
        this.soundWordArray[this.state.wordPlay].stop();
    }

    playLetterSound = () => {
        this.soundLetterArray[this.state.letterPlay].stop(() => {
            this.mute.play();
        });
        this.soundSentenceArray[this.state.letterPlay].stop();
        this.soundWordArray[this.state.wordPlay].stop();
        this.soundLetterArray[this.state.letterPlay].stop();
        this.soundLetterArray[this.state.letterPlay].play();
    }

    playSentenceSound = () => {
        this.soundSentenceArray[this.state.letterPlay].stop(() => {
            this.mute.play();
        });
        this.soundWordArray[this.state.wordPlay].stop();
        this.soundLetterArray[this.state.letterPlay].stop();
        this.soundSentenceArray[this.state.letterPlay].stop();
        this.soundSentenceArray[this.state.letterPlay].play();
    }

    playWordSound = () => {
        this.setState({glow: this.state.glow == GlowA ? Glow_A : GlowA});
        this.soundWordArray[this.state.wordPlay].stop(() => {
            this.mute.play();
        });
        this.soundSentenceArray[this.state.letterPlay].stop();
        this.soundLetterArray[this.state.letterPlay].stop();
        this.soundWordArray[this.state.wordPlay].stop();
        this.soundWordArray[this.state.wordPlay].play();

        setTimeout(() => {
            this.setState({glow: this.state.glow == GlowA ? Glow_A : GlowA});
        }, 1000);
    }

    glow = () => {
        this.setState({glow: this.state.glow == GlowA ? Glow_A : GlowA});
    }

    goHome = () => {
        this.props.navigation.navigate('home');
    }

    gotoMainMenu = () => {
        this.soundLetterArray[this.state.letterPlay].stop();
        this.soundWordArray[this.state.wordPlay].stop();
        this.props.navigation.navigate('mainMenu');
    }

    goNext = () => {
        this.soundLetterArray[this.state.letterPlay].stop();
        this.soundWordArray[this.state.wordPlay].stop();
        let letterNum = this.state.letterPlay;
        let nextPage = letterNum + 1;
        let nextBG = letterBGList[nextPage];

        if(nextPage <= 17) {
            this.changeBackground(nextBG, nextPage);
        } else {
            this.changeBackground(LetterA, 0);
        }
    }
    
    goPrev = () => {
        this.soundLetterArray[this.state.letterPlay].stop();
        this.soundWordArray[this.state.wordPlay].stop();
        const letterNum = this.state.letterPlay;
        const prevPage = letterNum - 1;
        const prevBG = letterBGList[prevPage];

        if(prevPage > 0) {
            this.changeBackground(prevBG, prevPage);
        } else {
            this.changeBackground(LetterA, 0);
        }
    }

    goBack = () => {
        if(this.state.prevBG == sentenceBGList[this.state.letterPlay]) {
            this.soundSentenceArray[this.state.letterPlay].stop();
            this.setState({menuLetterHide: '-1000%', 
                    imageBackground: letterBGList[this.state.letterPlay],
                    prevHide: letterBGList[this.state.letterPlay] == LetterA ? hideLeft : showPrev,
                    pencilHide: showPencil,
                    glowHide: showGlow,
                    speakerHide: showSpeaker,
                    sentenceHide: showSentence,
                    nextHide: showNext,
                    speaker2Hide: hideLeft, prevBG: letterBGList[this.state.letterPlay]});
                
        } else {
            this.soundLetterArray[this.state.letterPlay].stop();
            this.soundWordArray[this.state.wordPlay].stop();
            if(this.state.imageBackground == imageMainBG) {
                for(i = 0; i < 18; i++) {
                    this.soundLetterArray[i].release();
                    this.soundWordArray[i].release();
                    this.soundSentenceArray[i].release();
                }
                
                this.props.navigation.navigate('mainMenu');
            } else {
                this.setState({menuLetterHide: '20%', imageBackground: imageMainBG,
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
            
            <ImageBackground style={styles.image} source={this.state.imageBackground} >

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
                <View style={{position: 'absolute', left: '55%', top: this.state.glowHide, width: '20%', height: '40%',}} >
                    <Image style={styles.Glow} source={this.state.glow}/>
                </View>

                {/* Pencil Button */}
                <View style={{position: 'absolute', left: '10%', top: this.state.pencilHide, width: '9%', height: '24%',}} >
                    <TouchableOpacity onPress={this.gotoTracingA}>
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


                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image source={GoBackIcon} style={styles.back}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={HomeIcon} style={styles.home}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(Letters);